<template>
  <SubPage title="解决方案" :img="Solution" v-model="currentLabel">
    <SubPageItem label="解决方案">
      <div class="solution_info"></div>
    </SubPageItem>
  </SubPage>
</template>

<script lang="ts">
export default {
  name: 'Solution',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { SubPage, SubPageItem } from '@/components'
import { Solution } from '@/assets'

const currentLabel = ref('解决方案')
</script>

<style scoped lang="less">
.solution_info {
  text-indent: 2em;
  line-height: 2em;
}
</style>
