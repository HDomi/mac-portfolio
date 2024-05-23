<template>
  <div class="inner-wrap">{{ previewId }}</div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  previewId: {
    type: String,
    default: "",
  },
});
</script>
<style lang="scss" scoped>
.inner-wrap {
  width: 100%;
  height: 100%;
}
</style>
