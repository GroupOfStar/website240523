<template>
  <SubPage title="联系我们" :img="Contact" v-model="currentLabel">
    <SubPageItem label="联系我们">
      <div class="contact_info">
        <p><h4>深圳市汇志达科技有限公司</h4></p>
        <p>地址：<address>深圳市宝安区石岩街道官田社区宝石东路232号1306A</address></p>
        <p>邮箱：<a href="mailto:sales@wisdatech.com">sales@wisdatech.com</a></p>
        <p><img :src="AddressMap" alt="插入地图" /></p>
      </div>
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
import { Contact, AddressMap } from '@/assets'

const currentLabel = ref('联系我们')
</script>

<style scoped lang="less">
.contact_info {
  line-height: 2em;
	address {
		display: inline-block
	}
	img {
		width: 80%;
	}
}
</style>
