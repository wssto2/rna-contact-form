<template>
    <div class="section dropdown">
        <div aria-required="true" class="form-group required">
            <label v-if="label" for="title">{{ label }}</label>
            <div class="custom-selectbox" :style="fullWidth ? 'max-width: 100%;' : ''">
                <select name="title" id="title" @change="$emit('input', $event.target.value)">
                    <option
                        v-for="option in options"
                        :key="`${name}_option_${option.id}`"
                        :selected="value == option [optionsKey]"
                        :value="option [optionsKey]"
                        :class="[{'selected-value': value == option [optionsKey]}]">{{ option [optionsValue] }}</option>
                </select>
                <span :class="['selectedValue', {'isInvalid': error}]">{{ selectedValue }}</span>
                <template v-if="error">
                    <span class="error-message">{{ error }}</span>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SelectField",

    props: {
        label: {
            type: String
        },

        name: {
            type: String,
            required: true
        },

        value: {
            type: [String, Number]
        },

        required: {
            type: Boolean,
            default: false
        },

        error: {
            type: String
        },

        options: {
            type: Array,
            default: () => { return [] }
        },

        optionsKey: {
            type: String,
            default: 'id'
        },

        optionsValue: {
            type: String,
            default: 'name'
        },

        fullWidth: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        firstOption() {
            return this.options [0][this.optionsValue];
        },

        selectedValue() {
            if (! this.optionsKey) {
                console.error('optionsKey is required');
                return this.firstOption;
            }

            if (!this.optionsValue) {
                console.error('optionsValue is required');
                return this.firstOption;
            }

            if (! this.options || ! this.options.length) {
                return this.firstOption;
            }

            if (! this.value) {
                return this.firstOption;
            }

            let option = this.options.find((o) => o [this.optionsKey].toString() === this.value.toString());

            if (!option || !option [this.optionsValue]) {
                return this.options [0][this.optionsValue];
            }

            return option [this.optionsValue] || '';
        }
    }
}
</script>

<style scoped>

</style>