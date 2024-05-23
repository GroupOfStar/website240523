<template>
  <div class="sub_item_content" v-show="label === menuProvide">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SubPageItem',
}
</script>
<script setup lang="ts">
import { inject } from 'vue'
import type { ISubPageInjection, ISubPageItemProps } from './interface.d'
import { SUB_PAGE_PROVIDE } from './provide'

defineProps<ISubPageItemProps>()

const menuProvide = inject<ISubPageInjection>(SUB_PAGE_PROVIDE)
</script>

<style scoped lang="less">
.sub_item_content {
  padding: 32px 0;
  font-size: 14px;
  color: #666666;
}
</style>
