<template>
    <div class="form-design">
        <a-layout style="min-height: 100vh">
            <a-layout-sider
                :class="`left`"
                collapsible
                collapsedWidth="0"
                width="25%"
                :zeroWidthTriggerStyle="{
                    'margin-top': '-70px',
                    'background-color': 'gray'
                }"
                breakpoint="md"
                style="background-color: white"
            >
                <CollapseContainer :title="'基础组件'">
                    <CollapseItem :list="baseComponents" />
                </CollapseContainer>
                <CollapseContainer :title="'布局组件'">
                    <CollapseItem :list="layoutComponents" />
                </CollapseContainer>
            </a-layout-sider>
            <a-layout-content><FormComponentPanel /></a-layout-content>
            <a-layout-sider
                :class="`right `"
                collapsible
                :reverseArrow="true"
                collapsedWidth="0"
                width="25%"
                :zeroWidthTriggerStyle="{ 'margin-top': '-70px', 'background-color': 'gray' }"
                breakpoint="lg"
                style="background-color: white"
            >
                <PropsPanel />
            </a-layout-sider>
        </a-layout>
    </div>
</template>
<script setup lang="ts">
import CollapseContainer from '../components/CollapseContainer/Index';
import CollapseItem from '../components/CollapseItem/Index.vue';
import FormComponentPanel from '../components/FormComponentPanel/Index.vue';
import PropsPanel from '../components/PropsPanel/Index.vue';

import { baseComponents, layoutComponents } from '../config/formItemConfig';
</script>
<style lang="scss" scoped>
.form-design {
    height: 100vh;
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
}
</style>
