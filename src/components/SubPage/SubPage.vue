<template>
  <div class="sub_page_img" :style="{ backgroundImage: `url(${img})` }"></div>
  <div class="sub_page_wrapper">
    <div class="left_dir_wrapper">
      <div class="title_wrapper">{{ title }}</div>
      <ul class="dir_ul">
        <li
          v-for="item in slotLabels"
          :class="['li_item', { selected: item === modelValue }]"
          @click="() => emit('update:modelValue', item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="right_content_wrapper">
      <div class="content_title">{{ modelValue }}</div>

      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SubPage',
}
</script>
<script setup lang="ts">
import { computed, ComputedRef, provide, useSlots } from 'vue'
import { SUB_PAGE_PROVIDE } from './provide'
import type {
  ISubPageProps,
  ISubPageEmits,
  ISubPageInjection,
} from './interface.d'

const props = defineProps<ISubPageProps>()

const emit = defineEmits<ISubPageEmits>()
const slots = useSlots()

const slotLabels = computed(() =>
  (slots.default?.() || []).map(item => item.props?.label)
)
provide<ComputedRef<ISubPageInjection>>(
  SUB_PAGE_PROVIDE,
  computed(() => props.modelValue)
)
</script>

<style scoped lang="less">
.sub_page_img {
  margin: auto;
  height: 140px;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
}
.sub_page_wrapper {
  max-width: 1200px;
  margin: 24px auto 0;
  display: flex;
  gap: 48px;
  .left_dir_wrapper {
    width: 235px;
    .title_wrapper {
      height: 66px;
      background-color: #234eb0;
      line-height: 66px;
      text-align: center;
      color: white;
      font-size: 26px;
    }
    .dir_ul {
      list-style: none;
      padding: 0 24px;
      margin: 0;
      border: 5px solid #f3f3f3;
      border-top: none;
      font-size: 14px;

      .li_item {
        height: 44px;
        line-height: 44px;
        cursor: pointer;
        &.selected,
        &:hover {
          color: #244fab;
        }
        &:not(:last-child) {
          border-bottom: 2px solid #efefef;
        }
      }
    }
  }

  .right_content_wrapper {
    flex: 1;
    .content_title {
      color: #244fab;
      font-size: 24px;
      height: 66px;
      line-height: 66px;
      border-bottom: 2px solid #c2c2c2;
    }
  }
}
</style>
