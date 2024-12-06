<template>
    <div class="FormComponentPanel">
        <div class="user-setting"></div>
        <div class="componets">
            <vuedraggable tag="ul" v-model="props.list">
                <template #item="{ element, index }">
                    <li class="bs-box text-ellipsis">
                        {{ element.label }}
                    </li>
                </template>
            </vuedraggable>
        </div>
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
.FormComponentPanel {
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
    }
}
</style>
