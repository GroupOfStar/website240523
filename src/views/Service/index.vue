<template>
  <SubPage title="服务与支持" :img="Product" v-model="currentLabel">
    <SubPageItem label="服务与支持">
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
import { Product } from '@/assets'

const currentLabel = ref('服务与支持')
</script>

<style scoped lang="less">
.service_info {
  text-indent: 2em;
  line-height: 2em;
}
</style>
