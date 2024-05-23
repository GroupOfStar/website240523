<template>
  <SubPage title="关于我们" :img="About" v-model="currentLabel">
    <SubPageItem label="公司简介">
      <div class="company_info">
        <p>
          深圳市汇志达科技有限公司是一家集研发、生产、销售为一体的科技型公司，是工业实时通信和工业物联网领域整体解决方案提供商。
        </p>
        <p>
          我们秉持“质量第一，服务第一”的宗旨，为客户提供高可靠的工业级通讯产品以及最优质的售后服务。我们的产品应用遍布工业自动化、轨道交通、楼宇智能化、环保监测、电力系统、冶金化工等领域。您的信任是我们成长的动力，我们将站在您的角度为您量身定做最优的工业通讯解决方案。
        </p>
      </div>
    </SubPageItem>
    <SubPageItem label="企业文化">
      <div class="culture_info">
        <p>企业使命：急客户之所急，解客户之所需。</p>
        <p>企业价值观：求实、创新、诚信、共赢</p>
        <p>企业愿景：成长为一家有底蕴的智造公司</p>
      </div>
    </SubPageItem>
  </SubPage>
</template>

<script lang="ts">
export default {
  name: 'About',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { SubPage, SubPageItem } from '@/components'
import { About } from '@/assets'

const currentLabel = ref('公司简介')
</script>

<style scoped lang="less">
.company_info,
.culture_info {
  text-indent: 2em;
  line-height: 2em;
}
</style>
