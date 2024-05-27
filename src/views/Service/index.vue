<template>
  <SubPage title="服务与支持" :img="Service" v-model="currentLabel">
    <SubPageItem label="售后服务">
      <div class="service_info">
        <a href="mailto:support@wisdatech.com">support@wisdatech.com</a>
      </div>
    </SubPageItem>
    <SubPageItem label="资料下载">
      <div class="service_info"></div>
    </SubPageItem>
  </SubPage>
</template>

<script lang="ts">
export default {
  name: 'Service',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { SubPage, SubPageItem } from '@/components'
import { Service } from '@/assets'

const currentLabel = ref('售后服务')
</script>

<style scoped lang="less">
.service_info {
  line-height: 2em;
}
</style>
