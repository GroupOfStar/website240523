<template>
  <div class="page_wrapper">Solution</div>
</template>

<script lang="ts">
export default {
  name: 'Solution',
}
</script>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<style scoped lang="less">
.page_wrapper {
}
</style>
