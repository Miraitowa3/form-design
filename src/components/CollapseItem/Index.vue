<template>
    <div class="collapse-item">
        <VueDraggable
            tag="ul"
            v-model="list"
            :group="{ name: 'people', pull: 'clone', put: false }"
            :sort="false"
            draggable=".bs-box"
            :clone="cloneComponent"
        >
            <li v-for="(item, index) in list" class="bs-box" :key="item.label + index">
                <div class="component-item text-ellipsis">
                    {{ item.label }}
                </div>
            </li>
        </VueDraggable>
    </div>
</template>
<script lang="ts" setup>
import { VueDraggable } from 'vue-draggable-plus';

const list = defineModel<any>();

function cloneComponent(origin: any) {
    const clone = JSON.parse(JSON.stringify(origin));
    // clone.formId = ++this.idGlobal;
    // clone.span = formConf.span;
    clone.renderKey = +new Date(); // 改变renderKey后可以实现强制更新组件
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
<style scoped lang="scss">
.collapse-item {
    ul {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0;
        padding: 5px;
        list-style: none;

        li {
            width: calc(50% - 6px);
            height: 36px;
            margin: 2.7px;
            cursor: move;
            &:hover {
                position: relative;
                border: 1px solid #0960bd;
                box-shadow: 0 2px 6px #0960bd;
                color: #0960bd;
            }
            .component-item {
                width: 100%;
                height: 100%;
                padding: 8px 12px;
                transition: all 0.3s;
                border: 1px solid #ccc;
                border-radius: 3px;
                line-height: 20px;
                background: #fff;
                color: #333;
            }
        }
    }
}
</style>
