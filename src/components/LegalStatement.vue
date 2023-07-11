<template>
    <div>
        <div class="legal-info-component">
            <div class="legal-info-text-content" style="margin-top: -14px;" v-html="content"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LegalStatement",

    props: {
        content: String
    },
}
</script>

<style scoped>

</style>