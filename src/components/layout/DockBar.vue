<template>
  <div class="dock-bar-wrap flex-row">
    <div class="dock-contents flex-row">
      <IconComponent
        v-for="(item, idx) in dockIconArr"
        :key="idx"
        :title="item.title"
        :subTitle="item.subTitle"
        :iconImage="item.iconImage"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import IconComponent from "@/components/IconComponent.vue";

interface IDockIcon {
  title: string;
  subTitle: string;
  iconImage: string;
}

const dockIconArr = ref<Array<IDockIcon>>([
  {
    title: "웹 포트폴리오",
    subTitle: "작업물을 확인하세요",
    iconImage: require("../../assets/images/icons/mac_ic_chrome.png"),
  },
  {
    title: "Setting",
    subTitle: "여기다가는 뭘 넣지",
    iconImage: require("../../assets/images/icons/mac_ic_setting.png"),
  },
  {
    title: "Terminal",
    subTitle: "이건 뭘 넣지",
    iconImage: require("../../assets/images/icons/mac_ic_terminal.png"),
  },
]);
</script>
<style lang="scss" scoped>
.dock-bar-wrap {
  position: fixed;
  left: 0;
  bottom: 10px;
  width: 100%;
  padding: 0 12px;
  justify-content: center;
  .dock-contents {
    height: 90px;
    border-radius: 14px;
    padding: 0 12px;
    border: 1px solid var(--dock-border-color);
    background: var(--dock-background-color);
    gap: 18px;
  }
}
</style>
