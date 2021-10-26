<template>
    <div>
        <div class="legal-info-component">
            <div class="legal-info-label" @click="onToggle">{{ title }}</div>
            <div class="legal-info-text-content" v-show="expanded" v-html="content"></div>
        </div>
        <p class="legal-info-disclamer">{{ hint }}</p>
        <template v-if="error">
            <span class="error-message">{{ error }}</span>
        </template>
    </div>
</template>

<script>
export default {
    name: "LegalAccordion",

    props: {
        error: {
            type: String
        },

        title: String,
        content: String,
        hint: String
    },

    data() {
        return {
            expanded: false
        }
    },

    methods: {
        onToggle() {
            this.expanded = !this.expanded;

            this.$emit('input', 1);
        }
    }
}
</script>

<style scoped>

</style>