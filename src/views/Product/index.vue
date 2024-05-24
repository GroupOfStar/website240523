<template>
  <SubPage title="产品中心" :img="Product" v-model="currentLabel">
    <SubPageItem label="Ethercat分支器">
      <Row :gutter="16">
        <Col :span="8" v-for="item in branchingList" :key="item.id">
          <Card>
            <template #cover>
              <img class="cover_img" :alt="item.title" :src="item.img" />
            </template>
            <Card.Meta :title="item.title">
              <template #description>{{ item.description }}</template>
            </Card.Meta>
          </Card>
        </Col>
      </Row>
    </SubPageItem>
    <SubPageItem label="Ethercat协议转换器">
      <Row :gutter="24">
        <Col :span="8" v-for="item in converterList" :key="item.id">
          <Card>
            <template #cover>
              <img class="cover_img" :alt="item.title" :src="item.img" />
            </template>
            <Card.Meta :title="item.title">
              <template #description>{{ item.description }}</template>
            </Card.Meta>
          </Card>
        </Col>
      </Row>
    </SubPageItem>
  </SubPage>
</template>

<script lang="ts">
export default {
  name: 'Product',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { Card, Row, Col } from 'ant-design-vue'
import { SubPage, SubPageItem } from '@/components'
import { Product } from '@/assets'
import { branchingList, converterList } from './data'

const currentLabel = ref('Ethercat分支器')
</script>

<style scoped lang="less">
.cover_img {
  margin: 2px auto;
  width: 150px;
}
</style>
