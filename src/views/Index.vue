<template>
    <div class="form-design">
        <a-layout style="min-height: 100vh">
            <a-layout-sider
                :class="`left`"
                :zeroWidthTriggerStyle="{
                    'margin-top': '-70px',
                    'background-color': 'gray'
                }"
                breakpoint="md"
                collapsedWidth="0"
                collapsible
                style="background-color: white"
                width="25%"
            >
                <CollapseContainer :title="'输入型组件'">
                    <CollapseItem v-model="inputComponents" :cloneComponent="cloneComponent" />
                </CollapseContainer>
                <CollapseContainer :title="'选择型组件'">
                    <CollapseItem v-model="selectComponents" :cloneComponent="cloneComponent" />
                </CollapseContainer>
                <CollapseContainer :title="'布局组件'">
                    <CollapseItem v-model="layoutComponents" :cloneComponent="cloneComponent" />
                </CollapseContainer>
            </a-layout-sider>
            <a-layout-content style="background-color: white">
                <div class="form-component-panel">
                    <div class="user-setting"></div>
                    <div class="componets">
                        <a-row :gutter="formConf.gutter">
                            <a-form>
                                <VueDraggable
                                    v-model="drawingList"
                                    :animation="150"
                                    class="drawing-board"
                                    group="people"
                                >
                                    <DraggableItem
                                        v-for="(element, index) in drawingList"
                                        :key="element.renderKey"
                                        :active-id="activeId"
                                        :drawing-list="drawingList"
                                        :element="element"
                                        :form-conf="formConf"
                                        :index="index"
                                        :activeItem="activeFormItem"
                                    />
                                </VueDraggable>
                            </a-form>
                        </a-row>
                    </div>
                </div>
            </a-layout-content>
            <a-layout-sider
                :class="`right `"
                :reverseArrow="true"
                :zeroWidthTriggerStyle="{ 'margin-top': '-70px', 'background-color': 'gray' }"
                breakpoint="lg"
                collapsedWidth="0"
                collapsible
                style="background-color: white"
                width="25%"
            >
                <PropsPanel />
            </a-layout-sider>
        </a-layout>
    </div>
</template>
<script lang="ts" setup>
import CollapseContainer from '../components/CollapseContainer/Index';
import CollapseItem from '../components/CollapseItem/Index.vue';
import PropsPanel from '../components/PropsPanel/Index.vue';
import DraggableItem from '../components/DraggableItem/index';
import { VueDraggable } from 'vue-draggable-plus';
import {
    inputComponents,
    layoutComponents,
    selectComponents,
    formConf as formConfs
} from '../config/formItemConfig';
const drawingList = ref<any[]>([]);
const activeId = ref<string>();
const tempActiveData = ref<any>();
const idGlobal = ref(100);
const formConf = ref(formConfs);
const activeData = ref<any>();
function cloneComponent(origin: any) {
    const clone = JSON.parse(JSON.stringify(origin));
    clone.formId = ++idGlobal.value;
    clone.span = formConf.value.span;
    clone.renderKey = +new Date(); // 改变renderKey后可以实现强制更新组件
    if (!clone.layout) clone.layout = 'colFormItem';
    if (clone.layout === 'colFormItem') {
        clone.vModel = `field${idGlobal.value}`;
        clone.placeholder !== undefined && (clone.placeholder += clone.label);
        tempActiveData.value = clone;
    } else if (clone.layout === 'rowFormItem') {
        delete clone.label;
        clone.componentName = `row${idGlobal.value}`;
        clone.gutter = formConf.value.gutter;
        tempActiveData.value = clone;
    }

    return clone;
}
function activeFormItem(element: any) {
    activeData.value = element;
    activeId.value = element.formId;
}
</script>
<style lang="scss" scoped>
.form-design {
    height: 100vh;
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
}
.form-component-panel {
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    .user-setting {
        height: 40px;
        background-color: aqua;
    }
    .componets {
        flex: 1;
        :deep(.ant-row) {
            height: 100%;
            width: 100%;

            padding: 12px 12px 15px 12px;
            box-sizing: border-box;
        }
        :deep(.ant-form) {
            height: 100%;
            width: 100%;
        }
        .drawing-board {
            height: 100%;

            position: relative;
            $selectedColor: #f6f7ff;
            $lighterBlue: #409eff;

            .sortable-ghost {
                width: 100%;
                height: 60px;
                background-color: $selectedColor;
                position: relative;
                display: block;
                overflow: hidden;
                &::before {
                    content: ' ';
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    height: 3px;
                    background: rgb(89, 89, 223);
                    z-index: 2;
                }
            }
        }
    }
}
</style>
