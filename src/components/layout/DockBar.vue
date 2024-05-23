<template>
  <div class="dock-bar-wrap flex-row">
    <div class="dock-contents flex-row">
      <IconComponent
        v-for="(item, idx) in usedApp"
        :key="idx"
        :id="item.id"
        :title="item.title"
        :subTitle="item.subTitle"
        :iconImage="item.iconImage"
        @clickIcon="dockIconClick"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import IconComponent from "@/components/IconComponent.vue";
import { globalStore } from "@/store/global-store";

interface IDockApp {
  id: string;
  isDefault?: boolean;
  title: string;
  subTitle: string;
  iconImage: string;
}
interface IWindowItem {
  id: string;
  previewId?: string;
  position: { top: number; left: number };
  size: { width: number; height: number };
}
const store = globalStore();

onMounted(() => {
  const setDefaultAppArr = () => {
    store.setUsedAppArr(defaultAppArr);
    localStorage.setItem("USED_APP", JSON.stringify(defaultAppArr));
  };
  if (!localStorage.getItem("USED_APP")) {
    setDefaultAppArr();
  } else {
    if (
      JSON.parse(localStorage.getItem("USED_APP") || "[]").length !==
      defaultAppArr.length
    ) {
      setDefaultAppArr();
    }
    usedApp.value = JSON.parse(localStorage.getItem("USED_APP") || "[]");
  }
});

const usedApp = ref<Array<IDockApp>>([]);
store.$subscribe((mutation, state) => {
  usedApp.value = state.usedAppArr;
});
const defaultAppArr = [
  {
    id: "finder",
    isDefault: true,
    title: "Finder",
    subTitle: "파일 탐색기",
    iconImage: require("../../assets/images/icons/mac_ic_finder.png"),
  },
  {
    id: "portfolio",
    isDefault: true,
    title: "웹 포트폴리오",
    subTitle: "작업물을 확인하세요",
    iconImage: require("../../assets/images/icons/mac_ic_chrome.png"),
  },
  {
    id: "setting",
    isDefault: true,
    title: "Setting",
    subTitle: "여기다가는 뭘 넣지",
    iconImage: require("../../assets/images/icons/mac_ic_setting.png"),
  },
  {
    id: "launchpad",
    isDefault: true,
    title: "Launchpad",
    subTitle: "앱을 실행하세요",
    iconImage: require("../../assets/images/icons/mac_ic_launchpad.png"),
  },
  {
    id: "terminal",
    isDefault: true,
    title: "Terminal",
    subTitle: "이건 뭘 넣지",
    iconImage: require("../../assets/images/icons/mac_ic_terminal.png"),
  },
  {
    id: "folder",
    isDefault: true,
    title: "Folder",
    subTitle: "폴더를 열어보세요",
    iconImage: require("../../assets/images/icons/mac_ic_folder.png"),
  },
  {
    id: "folder_user",
    isDefault: true,
    title: "User Folder",
    subTitle: "황재영에 대하여",
    iconImage: require("../../assets/images/icons/mac_ic_folder_user.png"),
  },
  {
    id: "trash",
    isDefault: true,
    title: "Trash",
    subTitle: "쓰레기통 입니다.",
    iconImage: require("../../assets/images/icons/mac_ic_trash_empty.png"),
  },
];
const dockIconClick = (id: string) => {
  const opendWindows = store.getOpenWindowArr;
  const currentWindow = opendWindows.find(
    (window: IWindowItem) => window.id === id
  );
  if (!currentWindow) {
    store.addOpenWindowArr(id);
    return;
  }
  store.gotoLastWindow(id);
};
</script>
<style lang="scss" scoped>
.dock-bar-wrap {
  z-index: 99999;
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
