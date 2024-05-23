<template>
  <div class="main-wrap">
    <WindowLayout
      v-for="(window, idx) in openedWindows"
      :key="idx"
      :windowId="window.id"
      :previewId="window.previewId"
      :position="window.position"
      :size="window.size"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import WindowLayout from "@/components/window/WindowLayout.vue";
import { globalStore } from "@/store/global-store";

interface IWindowItem {
  id: string;
  previewId?: string;
  position: { top: number; left: number };
  size: { width: number; height: number };
}

const store = globalStore();

onMounted(() => {
  if (!localStorage.getItem("OPEN_WINDOW")) {
    store.setOpenWindowArr([]);
    localStorage.setItem("OPEN_WINDOW", JSON.stringify([]));
  } else {
    openedWindows.value = JSON.parse(
      localStorage.getItem("OPEN_WINDOW") || "[]"
    );
  }
});

const openedWindows = ref<Array<IWindowItem>>([]);
store.$subscribe((mutation, state) => {
  openedWindows.value = state.openWindowArr;
});
</script>

<style lang="scss" scoped>
.main-wrap {
  background-image: url("../assets/images/mac-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
