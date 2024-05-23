<template>
  <div class="inner-wrap">
    <div class="portfolio-wrap">
      <div
        class="portfolio-item flex-col"
        v-for="(item, idx) in portfolioList"
        :key="idx"
        @click="openNewPreview(item)"
      >
        <div class="portfolio-item-image">
          <img
            src="@/assets/images/icons/mac_ic_folder.png"
            alt="portfolio-image"
          />
        </div>
        <p class="portfolio-item-title">{{ item.projectName }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import { portFolioArr } from "@/data/portfolioList";
import { globalStore } from "@/store/global-store";

interface IPortFolio {
  id: string;
  category: string;
  projectName: string;
  desc: string;
  useLanguage: string[];
  time: string;
  manPower: string[];
  imgCount: number;
  href: string;
  githubHref: string;
}
interface IWindowItem {
  id: string;
  previewId?: string;
  position: { top: number; left: number };
  size: { width: number; height: number };
}

const store = globalStore();

const openNewPreview = (item: IPortFolio) => {
  const opendWindows = store.getOpenWindowArr;
  const currentPreview = opendWindows.find(
    (window: IWindowItem) => window.id === "preview"
  );
  if (!currentPreview) {
    store.addOpenWindowArr("preview", item.id);
    return;
  }
  setTimeout(() => {
    store.changePreviewId(item.id);
    store.gotoLastWindow("preview");
  }, 100);
};

const portfolioList = computed(() => {
  return portFolioArr as Array<IPortFolio>;
});
</script>
<style lang="scss" scoped>
.inner-wrap {
  width: 100%;
  height: 100%;
  .portfolio-wrap {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 20px;
    padding: 10px;
    .portfolio-item {
      cursor: pointer;
      justify-content: flex-start;
      .portfolio-item-image {
        width: 100px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .portfolio-item-title {
        margin-top: 6px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
      }
    }
  }
}
</style>
