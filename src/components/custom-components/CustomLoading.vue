<template>
  <div></div>
</template>
<script lang="ts" setup>
import { useQuasar, QSpinner } from "quasar";
import { computed, watch } from "vue";
import { globalStore } from "@/store/global-store";
const q = useQuasar();
const store = globalStore();

const isLoading = computed(() => store.isLoading);
watch(isLoading, (val) => {
  if (val) {
    showLoading();
  } else {
    q.loading.hide();
  }
});
const showLoading = () => {
  q.loading.show({
    spinner: QSpinner,
    html: true,
  });
};
</script>
<style lang="scss">
.custom-loading-wrap {
  z-index: 99999999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.q-loading__backdrop {
  background-color: #fff !important;
}
.q-loading__box {
  .q-spinner {
    color: #000 !important;
  }
}
</style>
