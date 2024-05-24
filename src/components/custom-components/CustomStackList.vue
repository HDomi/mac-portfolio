<template>
  <div :class="`all-icon-wrap ${isAboutMe ? 'is-about-me' : 'flex-row'}`">
    <div
      v-for="(item, idx) in filteredLanguageIconList"
      :key="`item-${idx}`"
      :class="getIconWrapClass()"
    >
      <div :class="`img-div ${item.name}`" />
      <p class="icon-label">{{ item.name.toUpperCase() }}</p>
      <CustomProgressBar v-if="isAboutMe" :percent="item.percent" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CustomProgressBar from "@/components/custom-components/CustomProgressBar.vue";
import { defineProps, computed } from "vue";

const props = defineProps({
  iconList: {
    type: Array,
    default: () => [],
  },
  isAboutMe: {
    type: Boolean,
    default: false,
  },
});

const filteredLanguageIconList = computed(() =>
  languageIconList.value.filter((item) => props.iconList?.includes(item.name))
);
const languageIconList = computed(() => [
  {
    name: "html",
    percent: "높음",
  },
  {
    name: "css",
    percent: "높음",
  },
  {
    name: "vue",
    percent: "중간",
  },
  {
    name: "react",
    percent: "중간",
  },
  {
    name: "react-native",
    percent: "낮음",
  },
  {
    name: "docusaurs",
    percent: "낮음",
  },
  {
    name: "firebase",
    percent: "낮음",
  },
  {
    name: "scss",
    percent: "중간",
  },
  {
    name: "javascript",
    percent: "중간",
  },
  {
    name: "typescript",
    percent: "중간",
  },
  {
    name: "graph-ql",
    percent: "낮음",
  },
]);

const getIconWrapClass = () => {
  return `icon-wrap flex-row ${props.isAboutMe ? "width-100" : ""}`;
};
</script>

<style scoped lang="scss">
.is-about-me {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.all-icon-wrap {
  width: 100%;
  overflow-x: auto;
  gap: 13px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .icon-wrap {
    &.width-100 {
      width: 100%;
    }
    .img-div {
      width: 25px;
      margin-right: 8px;
      &.html {
        content: url("../../assets/images/stack_icons/ic_html5.png");
      }
      &.css {
        content: url("../../assets/images/stack_icons/ic_css3.png");
      }
      &.vue {
        content: url("../../assets/images/stack_icons/ic_vue.png");
      }
      &.react {
        content: url("../../assets/images/stack_icons/ic_react.png");
      }
      &.react-native {
        content: url("../../assets/images/stack_icons/ic_reactnative.png");
      }
      &.typescript {
        content: url("../../assets/images/stack_icons/ic_ts.png");
      }
      &.firebase {
        content: url("../../assets/images/stack_icons/ic_firebase.png");
      }
      &.docusaurs {
        content: url("../../assets/images/stack_icons/ic_docu.png");
      }
      &.graph-ql {
        content: url("../../assets/images/stack_icons/ic_graphql.png");
      }
      &.scss {
        content: url("../../assets/images/stack_icons/ic_scss.png");
      }
      &.javascript {
        content: url("../../assets/images/stack_icons/ic_js.png");
      }
    }
  }
}
.icon-label {
  word-break: keep-all;
  width: max-content;
  margin-left: 3px;
  padding: 0 !important;
  font-size: 15px;
  font-weight: bold;
}
</style>
