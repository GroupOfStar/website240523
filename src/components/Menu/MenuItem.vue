<template>
  <div
    :class="['menu_item', { selected: menuProvide.value === path }]"
    @click="() => menuProvide.onMenuChange(path)"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MenuItem',
}
</script>
<script setup lang="ts">
import { inject } from 'vue'
import { IMenuInjection, IMenuItemProps } from './interface.d'
import { MENU_PROVIDE } from './provide'

defineProps<IMenuItemProps>()

const menuProvide = inject<IMenuInjection>(MENU_PROVIDE, {
  value: '/',
  onMenuChange() {},
})
</script>

<style scoped lang="less">
.menu_item {
  padding: 18px;
  color: #666;
  font-size: 18px;
  user-select: none;
  cursor: pointer;
  &:hover,
  &.selected {
    color: #1890ff;
  }
}
</style>
./provide
