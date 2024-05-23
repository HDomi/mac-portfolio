<template>
  <div class="dock-icon">
    <img :src="iconImage" :alt="title" @click="iconClick" />
    <div class="dock-icon-info flex-col">
      <p class="hover-title">{{ title }}</p>
      <p class="hover-sub-title">{{ subTitle }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect, defineProps, defineEmits, computed } from "vue";
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  iconImage: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["clickIcon"]);
const iconClick = () => {
  emit("clickIcon", props.id);
};
</script>
<style lang="scss" scoped>
.dock-icon {
  width: 70px;
  height: 70px;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
  }
  .dock-icon-info {
    position: absolute;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    left: 0;
    top: -80px;
    align-items: flex-start;
    background: var(--dock-hover-background-color);
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0px 0px 4px 0px var(--dock-border-color);
    &::after {
      content: "";
      position: absolute;
      top: calc(100% - 1px);
      left: 35px;
      transform: translateX(-50%);
      border-width: 10px;
      border-style: dashed;
      border-color: var(--dock-hover-background-color) transparent transparent
        transparent;
    }
    .hover-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--dock-hover-text-color);
    }
    .hover-sub-title {
      font-size: 13px;
      font-weight: 500;
      white-space: nowrap;
      color: var(--dock-hover-text-color);
    }
  }
  &:hover {
    .dock-icon-info {
      opacity: 1;
    }
  }
}
</style>
