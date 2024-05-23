<template>
  <q-header elevated class="header-wrap flex-row">
    <div class="header-left flex-row">
      <img src="../../assets/images/ic_vue.png" alt="logo" class="logo" />
    </div>
    <div class="header-right flex-row">
      <div class="now-time-clock">{{ nowTime }}</div>
    </div>
  </q-header>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

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
  .header-left {
    justify-content: flex-start;
    .logo {
      width: 20px;
    }
  }
  .header-right {
    justify-content: flex-end;
  }
}
</style>
