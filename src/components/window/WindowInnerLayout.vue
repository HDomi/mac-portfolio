<template>
  <div class="window-inner">{{ currentId }}</div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  windowId: {
    type: String,
    default: "",
  },
});
const currentId = computed(() => props.windowId);
</script>
<style lang="scss" scoped>
.window-inner {
  width: 100%;
  padding: 8px 12px;
  border-radius: 14px;
  height: calc(100% - 40px);
  background: var(--window-inner-color);
}
</style>
