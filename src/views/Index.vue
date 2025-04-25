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
                <CollapseContainer :title="'输入型组件'">
                    <CollapseItem v-model="inputComponents" :onEnd="onEnd" :cloneComponent="cloneComponent" />
                </CollapseContainer>
                <CollapseContainer :title="'选择型组件'">
                    <CollapseItem
                        v-model="selectComponents"
                        :onEnd="onEnd"
                        :cloneComponent="cloneComponent"
                    />
                </CollapseContainer>
                <CollapseContainer :title="'布局组件'">
                    <CollapseItem
                        v-model="layoutComponents"
                        :onEnd="onEnd"
                        :cloneComponent="cloneComponent"
                    />
                </CollapseContainer>
            </a-layout-sider>
            <a-layout-content><FormComponentPanel v-model="drawingList" /></a-layout-content>
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
import { inputComponents, layoutComponents, selectComponents } from '../config/formItemConfig';
const drawingList = ref<any[]>([]);
function onEnd(obj: any) {
    if (obj.from !== obj.to) {
    }
}

function cloneComponent(origin: any) {
    const clone = JSON.parse(JSON.stringify(origin));
    clone.id = new Date().getTime();
    console.log('🚀 -----------------------------------🚀');
    console.log('🚀 ~ cloneComponent ~ clone:', clone);
    console.log('🚀 -----------------------------------🚀');
    // clone.formId = ++this.idGlobal;
    // clone.span = formConf.span;
    // clone.renderKey = +new Date(); // 改变renderKey后可以实现强制更新组件
    // if (!clone.layout) clone.layout = 'colFormItem';
    // if (clone.layout === 'colFormItem') {
    //     clone.vModel = `field${this.idGlobal}`;
    //     clone.placeholder !== undefined && (clone.placeholder += clone.label);
    //     tempActiveData = clone;
    // } else if (clone.layout === 'rowFormItem') {
    //     delete clone.label;
    //     clone.componentName = `row${this.idGlobal}`;
    //     clone.gutter = this.formConf.gutter;
    //     tempActiveData = clone;
    // }

    return clone;
}
</script>
<style lang="scss" scoped>
.form-design {
    height: 100vh;
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
}
</style>
