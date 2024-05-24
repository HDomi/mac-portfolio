<template>
  <q-layout class="all-wrapper">
    <MainHeader />
    <DockBar />
    <q-page-container>
      <MainDrawer />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import MainHeader from "./MainHeader.vue";
import MainDrawer from "./MainDrawer.vue";
import DockBar from "./DockBar.vue";
import { globalStore } from "@/store/global-store";

const store = globalStore();
</script>

<style lang="scss">
.q-layout {
  height: 100%;
}
.q-page-container {
  width: 100%;
  height: 100%;
}

// tooltip custom
body {
  div {
    .q-tooltip {
      min-height: 22px !important;

      display: flex;
      padding: 2px 10px;
      border-radius: 50px;
      background: var(--new-gray-8, #e4e4e7);

      color: var(--new-gray-1, #27272a);
      font-size: 12px;
      font-weight: 400;
      line-height: 140%; /* 16.8px */
    }
  }
}

.q-rating__icon {
  text-shadow: none !important;
}
</style>
