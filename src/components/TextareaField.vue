<template>
    <div class="textfield section">
        <div :aria-required="required ? 'true' : 'false'" :class="['form-group', {'required': required}]">
            <label v-if="label" :for="name">{{ label }}</label>
            <div class="form-group-container">
                <textarea :id="name" :name="name" :required="required" :class="[{'isInvalid': error}]" @input="$emit('input', $event.target.value)"></textarea>
                <template v-if="error">
                    <span class="error-message">{{ error }}</span>
                </template>
            </div>
            <span class="help-block" v-if="help">
                <p>{{ help }}</p>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "TextareaField",

    props: {
        label: {
            type: String
        },

        name: {
            type: String,
            required: true
        },

        value: {
            type: String
        },

        required: {
            type: Boolean,
            default: false
        },

        help: {
            type: String
        },

        error: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>