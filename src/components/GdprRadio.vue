<template>
    <div class="checkbox section form-group">
        <div class="form-check-label">
            <p>{{ label }}{{ required ? '*' : ''}}</p>
        </div>
        <div class="form-check form-check-inline checkbox-margin">
            <label :for="'gdpr_' + name + '_yes'" class="form-check-label">{{ yesLabel }}
                <input type="radio" :name="'gdpr_' + name" :checked="value === true" :id="'gdpr_' + name + '_yes'" @change="$emit('input', 1)" class="form-check-input" value="true">
                <span class="gdpr-radio-button"></span>
            </label>
        </div>
        <div class="form-check form-check-inline checkbox-margin">
            <label :for="'gdpr_' + name + '_no'" class="form-check-label">{{ noLabel }}
                <input type="radio" :name="'gdpr_' + name" :checked="value === false" :id="'gdpr_' + name + '_no'" @change="$emit('input', 0)" class="form-check-input" value="false">
                <span class="gdpr-radio-button"></span>
            </label>
        </div>
        <template v-if="error">
            <span class="error-message">{{ error }}</span>
        </template>
    </div>
</template>

<script>
export default {
    name: "GdprRadio",

    props: {
        label: {
            type: String
        },

        name: {
            type: String,
            required: true
        },

        value: [Boolean, String, Number],

        error: {
            type: String
        },

        required: {
            type: Boolean
        },

        yesLabel: {
            type: String
        },

        noLabel: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>