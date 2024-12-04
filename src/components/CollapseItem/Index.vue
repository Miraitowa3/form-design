<template>
    <div class="collapse-item">
        <vuedraggable tag="ul" v-model="props.list">
            <template #item="{ element, index }">
                <li class="bs-box text-ellipsis">
                    {{ element.label }}
                </li>
            </template>
        </vuedraggable>
    </div>
</template>
<script lang="ts" setup>
import vuedraggable from 'vuedraggable';
import type { PropType } from 'vue';
const props = defineProps({
    list: {
        type: Array as PropType<any>,
        default: () => []
    }
});
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
            padding: 8px 12px;
            transition: all 0.3s;
            border: 1px solid #ccc;
            border-radius: 3px;
            line-height: 20px;
            cursor: move;
            &:hover {
                position: relative;
                border: 1px solid #0960bd;
                box-shadow: 0 2px 6px #0960bd;
                color: #0960bd;
            }
        }
    }
}
</style>
