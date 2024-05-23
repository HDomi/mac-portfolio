<template>
  <q-header elevated class="header-wrap flex-row">
    <div class="header-left flex-row">
      <img src="../../assets/images/ic_vue.png" alt="logo" class="logo" />
      <p class="text" @click="closeEveryWindow">모든 창 닫기</p>
      <p class="text">정보</p>
    </div>
    <div class="header-right flex-row">
      <div class="text now-time-clock">{{ nowTime }}</div>
    </div>
  </q-header>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { globalStore } from "@/store/global-store";

interface IWindowItem {
  id: string;
  position: { top: number; left: number };
  size: { width: number; height: number };
}

const store = globalStore();
const formatTime = () => {
  return new Date().toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
};

const nowTime = ref(formatTime());
const intervalId = ref<number | null>(null);

onMounted(() => {
  intervalId.value = setInterval(() => {
    nowTime.value = formatTime();
  }, 1000);
});

onUnmounted(() => {
  if (intervalId.value !== null) {
    clearInterval(intervalId.value);
  }
});

const closeEveryWindow = () => {
  const windowArr = [...store.getOpenWindowArr];
  windowArr.forEach((window: IWindowItem) => {
    store.removeOpenWindowArr(window.id);
  });
};
</script>
<style lang="scss" scoped>
.header-wrap {
  width: 100%;
  height: 32px;
  background-color: #000;
  color: #fff;
  justify-content: space-between;
  padding: 0 12px;
  font-weight: 500;
  .text {
    font-size: 14px;
    cursor: pointer;
  }
  .header-left {
    gap: 14px;
    justify-content: flex-start;
    .logo {
      width: 20px;
    }
  }
  .header-right {
    gap: 14px;
    justify-content: flex-end;
  }
}
</style>
