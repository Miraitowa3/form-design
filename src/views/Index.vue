<template>
    <div class="form-design">
        <a-layout style="min-height: 100vh">
            <a-layout-sider
                :class="`left`"
                collapsible
                collapsedWidth="0"
                width="270"
                :zeroWidthTriggerStyle="{
                    'margin-top': '-70px',
                    'background-color': 'gray'
                }"
                breakpoint="md"
            ></a-layout-sider>
            <a-layout-content></a-layout-content>
            <a-layout-sider
                :class="`right `"
                collapsible
                :reverseArrow="true"
                collapsedWidth="0"
                width="270"
                :zeroWidthTriggerStyle="{ 'margin-top': '-70px', 'background-color': 'gray' }"
                breakpoint="lg"
            ></a-layout-sider>
        </a-layout>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.form-design {
    height: 100vh;
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
}
</style>
