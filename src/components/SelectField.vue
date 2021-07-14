<template>
    <div class="section dropdown">
        <div aria-required="true" class="form-group required">
            <label for="title">Status</label>
            <div class="custom-selectbox">
                <select name="title" id="title" @change="$emit('input', $event.target.value)">
                    <option
                        v-for="option in options"
                        :key="`${name}_option_${option.id}`"
                        :selected="value == option.id"
                        :value="option.id"
                        :class="[{'selected-value': value == option.id}]">{{ option.name }}</option>
                </select>
                <span :class="['selectedValue', {'isInvalid': error}]">{{ selectedValue }}</span>
                <template v-if="error">
                    <span v-for="(err, errIndex) in error" :key="`${name}_error_${errIndex}`" class="error-message">{{ err }}</span>
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
            type: Array
        },

        options: {
            type: Array,
            default: () => { return [] }
        }
    },

    computed: {
        selectedValue() {
            if (!this.options || !this.value) {
                return this.options [0].name;
            }

            let option = this.options.find((o) => o.id.toString() === this.value.toString());

            if (!option || !option.name) {
                return this.options [0].name;
            }

            return option.name || '';
        }
    }
}
</script>

<style scoped>

</style>