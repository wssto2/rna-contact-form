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

        <div class="renault-switch">
            <label for="client-type">{{ legalLabelRenault || legalLabel }}</label>
            <div class="ToggleButton">
                <input type="checkbox" class="ToggleButton__checkbox" id="client-type" value="0" @change="onSwitchChange">
                <div class="ToggleButton__slider ToggleButton__round"></div>
                <label class="ToggleButton__switch" for="client-type"></label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CustomerType",

    props: {

        physicalLabel: String,

        legalLabel: String,

        legalLabelRenault: String,

        value: [String, Number]
    },

    methods: {
        onSwitchChange(e) {
            let checked = e.target.checked;
            this.$emit('input', checked ? 1 : 0);
        }
    }
}
</script>

<style scoped>

</style>