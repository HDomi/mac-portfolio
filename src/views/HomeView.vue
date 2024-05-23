<template>
  <div class="main-wrap"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { globalStore } from "@/store/global-store";

const store = globalStore();
</script>

<style lang="scss" scoped>
.main-wrap {
  background-image: url("../assets/images/mac-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
