<template>
  <div class="toast-inner flex-row">
    <div class="toast-cnt">
      <p class="title">{{ titleText }}</p>
      <p v-if="messageText !== '' && messageText !== null" class="message">
        {{ messageText }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps } from "vue";
const props = defineProps({
  // closeToast: Function as PropType<(e?: MouseEvent) => void>,
  toastProps: Object,
});
const titleText = computed(() => {
  const textProp = props.toastProps?.progressClassName;
  const split = textProp?.split("//");
  return split?.[1];
});
const messageText = computed(() => {
  const textProp = props.toastProps?.progressClassName;
  const split = textProp?.split("//");
  return split?.[2];
});
</script>
<style lang="scss">
//토스트
.toast-class-wrap {
  z-index: 9999999999999;
}
.toast-class {
  box-shadow: 1px 2px 10px 1px #27272a33 !important;
  border-radius: 8px !important;
  padding: 14px 22px !important;
  &.type-success {
    background-color: #52525b !important;
    color: #fafafa !important;
    .toast-body-class {
      .Toastify__toast-icon {
        svg {
          fill: #fafafa !important;
        }
      }
    }
    .Toastify__close-button {
      svg {
        fill: #fafafa !important;
      }
    }
  }
  &.type-error {
    border: 1px solid #ff5539 !important;
    background-color: #fff3f1 !important;
    color: #27272a !important;
    .toast-body-class {
      .Toastify__toast-icon {
        svg {
          fill: #ff5539 !important;
        }
      }
    }
    .Toastify__close-button {
      svg {
        fill: #27272a !important;
      }
    }
  }
  &.type-warn {
    background-color: #f4f4f5 !important;
    color: #27272a !important;
    border: none !important;
    .toast-body-class {
      .Toastify__toast-icon {
        svg {
          fill: #52525b !important;
        }
      }
    }
    .Toastify__close-button {
      svg {
        fill: #27272a !important;
      }
    }
  }
  &.type-info {
    background-color: #fff !important;
    color: #3f3f46 !important;
    border: 1px solid #d4d5d8 !important;
    .toast-body-class {
      .Toastify__toast-icon {
        svg {
          fill: #94969c !important;
        }
      }
    }
    .Toastify__close-button {
      svg {
        fill: #94969c !important;
      }
    }
  }
  .Toastify__close-button {
    opacity: 1 !important !important;
  }
}
.toast-body-class {
  align-items: flex-start !important;
  padding: 0 !important !important;
  .Toastify__toast-icon {
    margin-top: 4px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
}
.toast-progress-class {
  display: none !important;
}
.toast-cnt {
  .title {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    font-size: 16px;
    font-weight: 600;
  }
  .message {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    font-size: 13px;
    font-weight: 400;
    word-break: break-all;
  }
}
.toast-class-wrap {
  width: 100% !important;
  max-width: 620px !important;
  min-width: 320px !important;
}
</style>
