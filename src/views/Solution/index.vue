<template>
  <SubPage title="解决方案" :img="Solution" v-model="currentLabel">
    <SubPageItem label="解决方案">
      <div>
        <Row :gutter="[24, 24]" wrap>
          <Col :span="12" v-for="item in solutionList" :key="item.id">
            <Card>
              <template #cover>
                <img class="cover_img" :alt="item.title" :src="item.img" />
              </template>
              <Card.Meta>
                <template #title>
                  <div class="title_img">{{ item.title }}</div>
                </template>
              </Card.Meta>
            </Card>
          </Col>
        </Row>
      </div>
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
import { Card, Row, Col } from 'ant-design-vue'
import { Solution } from '@/assets'
import { SubPage, SubPageItem } from '@/components'
import { solutionList } from './data'

const currentLabel = ref('解决方案')
</script>

<style scoped lang="less">
.title_img {
  text-align: center;
}
</style>
