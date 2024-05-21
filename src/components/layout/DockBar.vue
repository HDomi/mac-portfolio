<template>
  <div class="dock-bar-wrap flex-row">
    <div class="dock-contents flex-row">
      <div class="dock-icon">
        <p>아이콘</p>
      </div>
      <div class="dock-icon">
        <p>아이콘2</p>
      </div>
      <div class="dock-icon">
        <p>아이콘3</p>
      </div>
      <div class="dock-icon">
        <p>아이콘4</p>
      </div>
      <div class="dock-icon">
        <p>아이콘5</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.dock-bar-wrap {
  position: fixed;
  left: 0;
  bottom: 5px;
  width: 100%;
  padding: 0 12px;
  justify-content: center;
  .dock-contents {
    height: 100px;
    border-radius: 12px;
    padding: 0 10px;
    border: 1px solid var(--dock-border-color);
    background: var(--dock-background-color);
    gap: 20px;
    .dock-icon {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      background: #fff;
    }
  }
}
</style>
