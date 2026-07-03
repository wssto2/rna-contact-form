<template>
    <div class="textfield section">
        <div :aria-required="required ? 'true' : 'false'" :class="['form-group', {'required': required}]">
            <label v-if="label" :for="name">{{ label }}</label>
            <div class="form-group-container">
                <input
                    :id="name"
                    :name="name"
                    :required="required"
                    type="text"
                    :class="[{'isInvalid': error}]"
                    @input="onInput"
                    @keydown="phone ? onPhoneKeydown($event) : null"
                    @paste="phone ? onPhonePaste($event) : null"
                    placeholder=" "
                >
                <label v-if="label" :for="name">{{ label }}</label>
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
const PHONE_RE = /^[+\d]*$/;

export default {
    name: "TextField",

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
        },

        phone: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        onInput(event) {
            if (this.phone) {
                const clean = event.target.value.replace(/[^+\d]/g, '');
                if (event.target.value !== clean) {
                    event.target.value = clean;
                }
                this.$emit('input', clean);
            } else {
                this.$emit('input', event.target.value);
            }
        },

        onPhoneKeydown(event) {
            const allowed = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab', 'Home', 'End'];
            if (allowed.includes(event.key)) return;
            if (event.ctrlKey || event.metaKey) return; // allow copy/paste shortcuts
            if (!PHONE_RE.test(event.key)) {
                event.preventDefault();
            }
        },

        onPhonePaste(event) {
            event.preventDefault();
            const pasted = (event.clipboardData || window.clipboardData).getData('text');
            const clean = pasted.replace(/[^+\d]/g, '');
            document.execCommand('insertText', false, clean);
        }
    }
}
</script>

<style scoped>

</style>