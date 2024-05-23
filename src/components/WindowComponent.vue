<template>
  <div
    class="window-box"
    :style="{
      top: `${position.top}px`,
      left: `${position.left}px`,
      width: `${size.width}px`,
      height: `${size.height}px`,
    }"
  >
    <div class="window-header flex-row" @mousedown="moveWindow($event)">
      <div class="buttons flex-row">
        <div class="buttons-btn close" @click.stop="closeWindow"></div>
        <div class="buttons-btn minimize"></div>
        <div class="buttons-btn maximize"></div>
      </div>
    </div>
    <div class="window-inner">
      <slot name="inner"></slot>
    </div>
    <div
      class="resize-handle nw"
      @mousedown.stop="resizeWindow('nw', $event)"
    ></div>
    <div
      class="resize-handle ne"
      @mousedown.stop="resizeWindow('ne', $event)"
    ></div>
    <div
      class="resize-handle sw"
      @mousedown.stop="resizeWindow('sw', $event)"
    ></div>
    <div
      class="resize-handle se"
      @mousedown.stop="resizeWindow('se', $event)"
    ></div>
    <div
      class="resize-handle w"
      @mousedown.stop="resizeWindow('w', $event)"
    ></div>
    <div
      class="resize-handle e"
      @mousedown.stop="resizeWindow('e', $event)"
    ></div>
    <div
      class="resize-handle n"
      @mousedown.stop="resizeWindow('n', $event)"
    ></div>
    <div
      class="resize-handle s"
      @mousedown.stop="resizeWindow('s', $event)"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, onUnmounted } from "vue";
import { globalStore } from "@/store/global-store";
interface IWindowPosition {
  top: number;
  left: number;
}
interface IWindowSize {
  width: number;
  height: number;
}
const store = globalStore();
const props = defineProps({
  windowId: {
    type: String,
    default: "",
  },
  position: {
    type: Object as () => IWindowPosition,
    default: () => ({ top: 0, left: 0 }),
  },
  size: {
    type: Object as () => IWindowSize,
    default: () => ({ width: 300, height: 200 }),
  },
});

const closeWindow = () => {
  store.removeOpenWindowArr(props.windowId);
};
let startX = 0;
let startY = 0;
let initialTop = 0;
let initialLeft = 0;
let startWidth = 0;
let startHeight = 0;
let dragging = false;
let resizing: string | false = false;

const moveWindow = (event: MouseEvent) => {
  startX = event.clientX;
  startY = event.clientY;
  initialTop = props.position.top;
  initialLeft = props.position.left;
  dragging = true;
};

const resizeWindow = (direction: string, event: MouseEvent) => {
  startX = event.clientX;
  startY = event.clientY;
  startWidth = props.size.width;
  startHeight = props.size.height;
  initialTop = props.position.top;
  initialLeft = props.position.left;
  resizing = direction;
};

const handleMouseMove = (event: MouseEvent) => {
  if (dragging) {
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    store.moveWindow(props.windowId, {
      top: initialTop + dy,
      left: initialLeft + dx,
    });
  }
  if (resizing) {
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    let newWidth = startWidth;
    let newHeight = startHeight;
    let newTop = props.position.top;
    let newLeft = props.position.left;

    if (resizing.includes("w")) {
      newWidth = startWidth - dx;
      newLeft = initialLeft + dx;
    } else if (resizing.includes("e")) {
      newWidth = startWidth + dx;
    }

    if (resizing.includes("n")) {
      newHeight = startHeight - dy;
      newTop = initialTop + dy;
    } else if (resizing.includes("s")) {
      newHeight = startHeight + dy;
    }

    store.resizeWindow(
      props.windowId,
      {
        top: newTop,
        left: newLeft,
      },
      {
        width: newWidth > 300 ? newWidth : 300,
        height: newHeight > 200 ? newHeight : 200,
      }
    );
  }
};

const handleMouseUp = () => {
  dragging = false;
  resizing = false;
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
});
</script>
<style lang="scss" scoped>
.window-box {
  z-index: 99999;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid var(--window-border-color);
  background: var(--window-header-color);
  .window-header {
    padding: 0 12px;
    width: 100%;
    height: 40px;
    cursor: grab;
    background: var(--window-header-color);
    justify-content: space-between;
    .buttons {
      cursor: default;
      gap: 7px;
      .buttons-btn {
        cursor: pointer;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        &.close {
          background: var(--window-close-color);
        }
        &.minimize {
          background: var(--window-minimize-color);
        }
        &.maximize {
          background: var(--window-maximize-color);
        }
      }
    }
  }
  .window-inner {
    width: 100%;
    padding: 8px 12px;
    border-radius: 14px;
    height: calc(100% - 40px);
    background: var(--window-inner-color);
  }
  .resize-handle {
    position: absolute;
    background: transparent;
    &.n,
    &.s {
      z-index: 1;
      width: 100%;
      height: 10px;
      left: 0;
      cursor: ns-resize;
    }
    &.n {
      top: 0;
    }
    &.s {
      bottom: 0;
    }
    &.e,
    &.w {
      z-index: 1;
      width: 10px;
      height: 100%;
      top: 0;
      cursor: ew-resize;
    }
    &.e {
      right: 0;
    }
    &.w {
      left: 0;
    }
    &.ne,
    &.nw,
    &.se,
    &.sw {
      z-index: 2;
      width: 15px;
      height: 15px;
      cursor: nwse-resize;
    }
    &.ne {
      top: 0;
      right: 0;
      cursor: nesw-resize;
    }
    &.nw {
      top: 0;
      left: 0;
    }
    &.se {
      bottom: 0;
      right: 0;
    }
    &.sw {
      bottom: 0;
      left: 0;
      cursor: nesw-resize;
    }
  }
}
</style>
