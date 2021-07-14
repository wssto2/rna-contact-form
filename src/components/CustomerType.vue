<template>
    <div class="menu-wrap">
        <ul class="range-tab row">
            <li :class="['tab-holder', {'active': Number(value) === 0}]" @click="$emit('input', 0)">
                <span class="tab-text">{{ physicalLabel }}</span>
            </li>
            <li :class="['tab-holder', {'active': Number(value) === 1}]" @click="$emit('input', 1)">
                <span class="tab-text">{{ legalLabel }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "CustomerType",

    props: {

        physicalLabel: String,

        legalLabel: String,

        value: [String, Number]
    }
}
</script>

<style scoped>

</style>