<template>
  <div class="footer_wrapper">
    <div
      class="footer_wrapper_area"
      :style="{ height: `${shimHeight}px` }"
    ></div>
    <div class="footer" ref="footerRef">
      <div class="copyright">
        Copyright © 2024 深圳市汇志达科技有限公司. All Rights Reserved.
      </div>
      <div class="filing">
        <img src="/gov.png" />
        <a href="https://beian.miit.gov.cn" target="_blank">
          粤ICP备2024261115号-1
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Footer',
}
</script>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const footerRef = ref<HTMLElement>()

const shimHeight = ref<number>(0)

onMounted(() => {
  const footerDom = footerRef.value
  if (footerDom) {
    shimHeight.value = footerDom.getBoundingClientRect().height
  }
})
</script>

<style scoped lang="less">
.footer_wrapper {
  width: 100%;
  font-size: 12px;
  .footer_wrapper_area {
    margin-top: 24px;
    height: 68px;
  }
  .footer {
    width: 100%;
    padding: 24px 0;
    text-align: center;
    background-color: #323238ed;
    position: absolute;
    bottom: 0;
    .copyright {
      color: gray;
    }
    .filing {
      margin-top: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      img {
        width: 16px;
      }
      a {
        color: gray;
      }
    }
  }
}
</style>
