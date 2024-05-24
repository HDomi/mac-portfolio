<template>
  <div class="inner-wrap">
    <div class="about-me-inner flex-col">
      <div class="my-photo">
        <img src="../../../assets/images/my_photo.jpg" alt="myphoto" />
      </div>
      <div class="stack-sec flex-col">
        <AboutMeItem>
          <template #icon>
            <HeartIcon />
          </template>
          <template #heading>슬로건</template>
          <template #contents>
            기업의 이익과 동시에 자신의 능력 향상을 추구합니다.
          </template>
        </AboutMeItem>

        <AboutMeItem>
          <template #icon>
            <ToolingIcon />
          </template>
          <template #heading>간략 자기소개</template>
          <template #contents>
            안녕하세요. <br />
            약3년차 프론트엔드 개발자로 근무하고 있는 황재영입니다.<br />
            지난 시간동안 개발 실력뿐이 아닌 의사소통능력과<br />
            팀워크를 중요시하며, 더 나은 결과를 도출 할 수 있도록<br />
            언제나 노력하며 근무했다고 생각합니다.<br /><br />
            현재는 프론트엔드 개발자로서 더 효율적인 코드를 작성하고자 노력하고
            있습니다.<br />
            감사합니다.
          </template>
        </AboutMeItem>

        <AboutMeItem>
          <template #icon>
            <IconCube />
          </template>
          <template #heading>기술스택</template>
          <template #contents>
            <CustomStackList :iconList="iconList" :isAboutMe="true" />
          </template>
        </AboutMeItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AboutMeItem from "@/components/MyInfoItem.vue";
import HeartIcon from "@/components/icons/IconHeart.vue";
import IconCube from "@/components/icons/IconCube.vue";
import ToolingIcon from "@/components/icons/IconTooling.vue";
import CustomStackList from "@/components/custom-components/CustomStackList.vue";
import { defineProps, computed } from "vue";

const iconList = [
  "html",
  "css",
  "vue",
  "react-native",
  "react",
  "typescript",
  "firebase",
  "docusaurs",
  "graph-ql",
  "scss",
];
</script>
<style lang="scss" scoped>
.inner-wrap {
  width: 100%;
  height: 100%;
  .about-me-inner {
    margin-bottom: 20px;
    .my-photo {
      width: 200px;
      img {
        border-radius: 20px;
        width: 100%;
      }
    }
    .stack-sec {
      margin-top: 20px;
    }
  }
}
</style>
