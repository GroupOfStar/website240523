<template>
  <div class="menu_wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Menu',
}
</script>
<script setup lang="ts">
import { computed, ComputedRef, provide } from 'vue'
import { useRouter } from 'vue-router'
import { IMenuInjection, IMenuProps } from './interface.d'
import { MENU_PROVIDE } from './provide'

const props = defineProps<IMenuProps>()
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const router = useRouter()

function onMenuChange(label: string) {
  router.push(label)
}

const tabInjection = computed<IMenuInjection>(() => ({
  value: props.modelValue,
  onMenuChange,
}))

provide<ComputedRef<IMenuInjection>>(MENU_PROVIDE, tabInjection)
</script>

<style scoped lang="less">
.menu_wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
./provide
