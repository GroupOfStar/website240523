<template>
  <ConfigProvider :locale="zhCN">
    <div class="page_wrapper">
      <div class="header_wrapper">
        <img class="logo_img" :src="Logo" @click="() => router.push('/')" />
        <Menu :modelValue="route.path">
          <MenuItem path="/home">首页</MenuItem>
          <MenuItem path="/about">关于我们</MenuItem>
          <MenuItem path="/product">产品中心</MenuItem>
          <MenuItem path="/solution">解决方案</MenuItem>
          <MenuItem path="/service">服务与支持</MenuItem>
          <MenuItem path="/contact">联系我们</MenuItem>
        </Menu>
      </div>
      <RouterView />
      <Footer></Footer>
    </div>
  </ConfigProvider>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>
<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { Footer, Menu, MenuItem } from '@/components'
import { Logo } from '@/assets'

const route = useRoute()
const router = useRouter()
</script>

<style scoped lang="less">
.page_wrapper {
  min-height: 100vh;
  position: relative;

  .header_wrapper {
    max-width: 1200px;
    padding: 24px 0;
    margin: 0px auto;
    display: flex;
    align-items: center;
    gap: 48px;

    .logo_img {
      height: 60px;
      cursor: pointer;
    }
  }
}
</style>
