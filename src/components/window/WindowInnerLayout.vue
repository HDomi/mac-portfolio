<template>
  <div class="window-inner">
    <WebPortfolio v-if="currentId === 'portfolio'" />
    <MyInfo v-if="currentId === 'folder_user'" />
    <FinderInner v-if="currentId === 'finder'" />
    <LaunchPadInner v-if="currentId === 'launchpad'" />
    <SettingsInner v-if="currentId === 'setting'" />
    <TerminalInner v-if="currentId === 'terminal'" />
    <FolderInner v-if="currentId === 'folder'" />
    <TrashInner v-if="currentId === 'trash'" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import FinderInner from "@/components/window/contents/FinderInner.vue";
import LaunchPadInner from "@/components/window/contents/LaunchPadInner.vue";
import SettingsInner from "@/components/window/contents/SettingsInner.vue";
import TerminalInner from "@/components/window/contents/TerminalInner.vue";
import FolderInner from "@/components/window/contents/FolderInner.vue";
import WebPortfolio from "@/components/window/contents/WebPortfolio.vue";
import MyInfo from "@/components/window/contents/MyInfo.vue";
import TrashInner from "@/components/window/contents/TrashInner.vue";
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
  border-radius: 14px;
  height: calc(100% - 40px);
  background: var(--window-inner-color);
}
</style>
