<template>
    <div class="FormComponentPanel">属性面板</div>
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
}
</style>
