<template>
  <div class="progress-bar">
    <div class="fill flex-row" :style="{ width: convertPercent }">
      {{ percent }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed } from "vue";

const props = defineProps<{
  percent: string;
}>();

const convertPercent = computed(() => {
  if (props.percent?.includes("%")) return props.percent;
  let returnValue = "";
  switch (props.percent) {
    case "낮음":
      returnValue = "33%";
      break;
    case "중간":
      returnValue = "62%";
      break;
    case "높음":
      returnValue = "100%";
      break;
    default:
      returnValue = "0%";
      break;
  }
  return returnValue;
});
</script>
<style scoped lang="scss">
.progress-bar {
  margin-left: 10px;
  border-radius: 5px;
  flex: 1;
  height: 10px;
  background: #dfdfdf7b;
  position: relative;
  overflow: hidden;
  .fill {
    padding: 0 !important;
    border-radius: 5px;
    position: absolute;
    justify-content: center;
    left: 0;
    top: 0;
    height: 100%;
    background: var(--main-gradient);
    background-size: 400% 400%;
    animation: var(--main-gradient-animation);
    font-size: 11px;
  }
}
</style>
