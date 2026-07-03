<template>
  <div class="textfield section city-combo">
    <div :aria-required="required ? 'true' : 'false'" :class="['form-group', { required }]">
      <label v-if="label" :for="name">{{ label }}</label>
      <div class="form-group-container city-combo__container">
        <input :id="name" ref="input" :name="name" :required="required" type="text"
          :class="['city-combo__input', { isInvalid: error }]" :value="inputValue" autocomplete="off" placeholder=" "
          @input="onInput" @keydown.down.prevent="onArrowDown" @keydown.up.prevent="onArrowUp"
          @keydown.enter.prevent="onEnter" @keydown.esc="onEsc" @blur="onBlur" @focus="onFocus">
        <label v-if="label" :for="name">{{ label }}</label>

        <ul v-show="isOpen && suggestions.length > 0" ref="dropdown" class="city-combo__dropdown" role="listbox">
          <li v-for="(option, index) in suggestions" :key="option.value"
            :class="['city-combo__option', { 'city-combo__option--active': index === activeIndex }]" role="option"
            :aria-selected="index === activeIndex" @mousedown.prevent="selectOption(option)"
            @mouseover="activeIndex = index">
            <span class="city-combo__option-label">{{ option.label }}</span>
            <span v-if="option.description" class="city-combo__option-meta">{{ option.description }}</span>
          </li>
        </ul>

        <template v-if="error">
          <span class="error-message">{{ error }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CityComboField",

  props: {
    label: { type: String },
    name: { type: String, required: true },
    value: { type: String, default: "" },
    required: { type: Boolean, default: false },
    error: { type: String },
    apiUrl: { type: String, required: true },
    minLength: { type: Number, default: 1 },
    debounce: { type: Number, default: 250 },
  },

  data() {
    return {
      inputValue: this.value || "",
      suggestions: [],
      isOpen: false,
      activeIndex: -1,
      debounceTimer: null,
      isFetching: false,
      isConfirmed: !!this.value,
    };
  },

  watch: {
    value(newVal) {
      // Only sync from outside when a confirmed value arrives (non-empty),
      // or when the parent explicitly clears a previously confirmed value.
      // Ignore the "" emitted during typing to avoid wiping what the user typed.
      if (newVal !== this.inputValue && (newVal || this.isConfirmed)) {
        this.inputValue = newVal || "";
        this.isConfirmed = !!newVal;
      }
    },
  },

  methods: {
    onInput(event) {
      this.inputValue = event.target.value;
      this.isConfirmed = false;
      this.$emit("input", ""); // treat as unconfirmed until selected

      clearTimeout(this.debounceTimer);
      if (this.inputValue.length < this.minLength) {
        this.suggestions = [];
        this.isOpen = false;
        return;
      }
      this.debounceTimer = setTimeout(() => this.fetchSuggestions(), this.debounce);
    },

    async fetchSuggestions() {
      if (this.inputValue.length < this.minLength) return;

      this.isFetching = true;
      try {
        const { data } = await axios.get(this.apiUrl, {
          params: { query: this.inputValue, limit: 10 },
        });
        this.suggestions = Array.isArray(data) ? data : (data.data ?? []);
        this.activeIndex = -1;
        this.isOpen = this.suggestions.length > 0;
        this.$nextTick(() => {
            if (this.$refs.dropdown) this.$refs.dropdown.scrollTop = 0;
        });
      } catch {
        this.suggestions = [];
        this.isOpen = false;
      } finally {
        this.isFetching = false;
      }
    },

    selectOption(option) {
      this.inputValue = option.label;
      this.isConfirmed = true;
      this.$emit("input", option.label);
      this.$emit("selected", option);
      this.isOpen = false;
      this.suggestions = [];
      this.activeIndex = -1;
    },

    onArrowDown() {
      if (!this.isOpen) return;
      this.activeIndex = this.activeIndex >= this.suggestions.length - 1 ? 0 : this.activeIndex + 1;
      this.$nextTick(() => this.scrollActiveIntoView());
    },

    onArrowUp() {
      if (!this.isOpen) return;
      this.activeIndex = this.activeIndex <= 0 ? this.suggestions.length - 1 : this.activeIndex - 1;
      this.$nextTick(() => this.scrollActiveIntoView());
    },

    scrollActiveIntoView() {
      const dropdown = this.$refs.dropdown;
      if (!dropdown) return;
      const active = dropdown.children[this.activeIndex];
      if (!active) return;
      const { offsetTop, offsetHeight } = active;
      const { scrollTop, clientHeight } = dropdown;
      if (offsetTop < scrollTop) {
        dropdown.scrollTop = offsetTop;
      } else if (offsetTop + offsetHeight > scrollTop + clientHeight) {
        dropdown.scrollTop = offsetTop + offsetHeight - clientHeight;
      }
    },

    onEnter() {
      if (this.isOpen && this.activeIndex >= 0) {
        this.selectOption(this.suggestions[this.activeIndex]);
      }
    },

    onEsc() {
      this.isOpen = false;
      this.isConfirmed = false;
      this.inputValue = "";
      this.suggestions = [];
      this.$emit("input", "");
    },

    onFocus() {
      if (this.suggestions.length > 0) {
        this.isOpen = true;
      }
    },

    onBlur() {
      // Delay close so mousedown on option fires first.
      setTimeout(() => {
        this.isOpen = false;
        if (!this.isConfirmed) {
          this.inputValue = "";
          this.suggestions = [];
          this.$emit("input", "");
        }
      }, 150);
    },
  },
};
</script>

<style scoped>
.city-combo__container {
  position: relative;
}

.city-combo__input {
  width: 100%;
}

.city-combo__dropdown {
  position: absolute;
  z-index: 9999;
  left: 0;
  right: 0;
  top: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 220px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.city-combo__option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px !important;
  cursor: pointer;
  font-size: 0.95em !important;
}

.city-combo__option:hover,
.city-combo__option--active {
  background: #f5f5f5;
}

.city-combo__option-label {
  font-weight: 500;
}

.city-combo__option-meta {
  font-size: 0.85em !important;
  color: #888;
}
</style>
