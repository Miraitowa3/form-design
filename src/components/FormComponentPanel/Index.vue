<template>
    <div class="form-component-panel">
        <div class="user-setting"></div>
        <div class="componets">
            <VueDraggable
                v-model="drawingList"
                :animation="150"
                group="people"
                class="drawing-board"
                tag="ul"
            >
                <li v-for="(item, index) in drawingList" :key="item.id">
                    {{ item.label }}
                </li>
            </VueDraggable>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { VueDraggable } from 'vue-draggable-plus';
const drawingList = defineModel<any>();
</script>
<style scoped lang="scss">
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
        overflow: auto;
        .drawing-board {
            height: 100%;
            position: relative;
            $selectedColor: #f6f7ff;
            $lighterBlue: #409eff;

            li.sortable-ghost {
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

            // .active-from-item {
            //     & > .el-form-item {
            //         background: $selectedColor;
            //         border-radius: 6px;
            //     }
            //     & > .drawing-item-copy,
            //     & > .drawing-item-delete {
            //         display: initial;
            //     }
            //     & > .component-name {
            //         color: $lighterBlue;
            //     }
            // }
            // .el-form-item {
            //     margin-bottom: 15px;
            // }
        }
    }
}
</style>
