<template>
  <q-drawer
    v-model="drawerState"
    :width="350"
    :breakpoint="500"
    overlay
    bordered
    side="right"
    class="main-drawer"
  >
    <q-scroll-area class="fit">
      <div class="main-drawer-inner flex-col">
        <div class="noti-item flex-row">
          <div class="icon-sec"></div>
          <div class="text-sec flex-col">
            <p class="noti-title">알림</p>
            <p class="noti-desc">알림의 내용입니다.</p>
          </div>
        </div>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { globalStore } from "@/store/global-store";

const store = globalStore();
const drawerState = computed(() => store.getIsOpenDrawer);
</script>

<style lang="scss">
.q-drawer {
  background: rgba($color: #000000, $alpha: 0) !important;
  border: none !important;
}
.main-drawer {
  .q-scrollarea {
    .q-scrollarea__container {
      .q-scrollarea__content {
        .main-drawer-inner {
          width: 100%;
          height: 100%;
          gap: 20px;
          padding: 5px;
          .noti-item {
            width: 100%;
            padding: 15px;
            border-radius: 15px;
            background: var(--noti-background-color);
            border: 1px solid var(--noti-border-color);
            .icon-sec {
              width: 35px;
              height: 35px;
              border-radius: 10px;
              background: #fff;
            }
            .text-sec {
              color: #fff;
              margin-left: 10px;
              align-items: flex-start;
              .noti-title {
                font-size: 14px;
                font-weight: 500;
              }
              .noti-desc {
                font-size: 12px;
                font-weight: 400;
              }
            }
          }
        }
      }
    }
  }
}
</style>
