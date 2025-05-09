<template>
    <div class="collapse-item">
        <VueDraggable
            v-model="list"
            :group="{ name: 'people', pull: 'clone', put: false }"
            :sort="false"
            :clone="cloneComponent"
            class="draggable-list"
        >
            <div v-for="(item, index) in list" class="bs-box" :key="item.label + index">
                <div class="component-item text-ellipsis">
                    {{ item.label }}
                </div>
            </div>
        </VueDraggable>
    </div>
</template>
<script lang="ts" setup>
import { VueDraggable } from 'vue-draggable-plus';

const list = defineModel<any>();

const props = defineProps<{
    cloneComponent: (origin: any) => any;
}>();
</script>
<style scoped lang="scss">
.collapse-item {
    .draggable-list {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0;
        padding: 5px;
        list-style: none;

        .bs-box {
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
