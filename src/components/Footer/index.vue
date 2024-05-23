<template>
  <div class="footer_wrapper">
    <div class="footer_wrapper_area"></div>
    <div class="footer">
      <div class="copyright">
        2023-2025 &copy; 深圳市汇志达科技有限公司。 Copyright &copy; 2024 ALL
        Rights Reserved
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Footer',
}
</script>
<script setup lang="ts"></script>

<style scoped lang="less">
.footer_wrapper {
  position: relative;
  font-size: 12px;
  .footer_wrapper_area {
    margin-top: 24px;
    height: 68px;
  }
  .footer {
    height: 68px;
    width: 100%;
    padding: 24px 0;
    height: 68px;
    text-align: center;
    background-color: #323238ed;
    position: absolute;
    bottom: 0;
    .copyright {
      color: gray;
    }
  }
}
</style>
