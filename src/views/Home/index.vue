<template>
  <!-- banner -->
  <div class="banner_wrapper">
    <Carousel autoplay>
      <div>
        <div class="banner_item">
          <img :src="Banner01" alt="banner" class="banner_img" />
        </div>
      </div>
      <div>
        <div class="banner_item">
          <img :src="Banner02" alt="banner" class="banner_img" />
        </div>
      </div>
    </Carousel>
  </div>

  <!-- 公司简介 -->
  <div class="home_item_company">
    <div class="company_wrapper">
      <div class="company_content">
        <div class="title_wrapper">
          <div class="title">
            <div class="title_line"></div>
            <div class="title_text">公司简介</div>
          </div>
          <div class="title_en">Company Profile</div>
        </div>
        <div class="company_text">
          深圳市汇志达科技有限公司是一家集研发、生产、销售为一体的科技型公司，是工业实时通信和工业物联网领域整体解决方案提供商。
        </div>
        <div class="company_button" @click="() => router.push('/about')">
          了解更多
        </div>
      </div>
      <div class="img_wrapper">
        <div class="img_bg"></div>
        <img :src="Company" alt="company img" class="company_img" />
      </div>
    </div>
  </div>

  <!-- 产品中心 -->
  <div class="home_item_product">
    <div class="product_wrapper">
      <div class="title_wrapper">
        <div class="title_text">产品中心</div>
        <div class="title_text_en">Industry layout</div>
      </div>
      <div class="product_content">
        <div
          class="product_item"
          v-for="(item, index) in productList"
          :key="item.id"
        >
          <template v-if="index % 2">
            <img :src="item.img" :alt="item.title" class="product_img" />
            <div class="product_title">{{ item.title }}</div>
          </template>
          <template v-else>
            <div class="product_title">{{ item.title }}</div>
            <img :src="item.img" :alt="item.title" class="product_img" />
          </template>
        </div>
      </div>
    </div>
  </div>

  <!-- 新闻资讯 -->
  <div class="home_item_news">
    <div class="news_wrapper">
      <div class="title_wrapper">
        <div class="title_text">新闻资讯</div>
        <div class="title_text_en">News and information</div>
      </div>
      <div class="news_content"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
}
</script>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Carousel } from 'ant-design-vue'
import { Banner01, Banner02, Company } from '@/assets'
import { branchingList, converterList } from './../Product/data'

const router = useRouter()

const productList = [...branchingList, ...converterList]
</script>

<style scoped lang="less">
.banner_wrapper {
  .banner_item {
    max-height: 560px;
    display: flex;
    justify-content: center;
    align-items: center;
    .banner_img {
      width: 100%;
    }
  }
}

.home_item_company {
  .company_wrapper {
    max-width: 1200px;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
    padding: 62px 0;
    .company_content {
      .title_wrapper {
        display: flex;
        align-items: baseline;
        gap: 24px;
        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          .title_line {
            width: 4px;
            flex: 1;
            height: 34px;
            background-color: #3e89f9;
          }
          .title_text {
            font-weight: bold;
            font-size: 34px;
          }
        }
        .title_en {
          font-size: 14px;
          color: #999;
        }
      }
      .company_text {
        font-size: 14px;
        line-height: 2em;
        color: #999;
        margin-top: 48px;
      }

      .company_button {
        margin-top: 48px;
        border: 1px solid #076ce0;
        color: #076ce0;
        width: 168px;
        height: 48px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
        &:hover {
          background-color: #076ce0;
          color: white;
        }
      }
    }
  }

  .img_wrapper {
    position: relative;
    width: 384px;
    height: 264px;
    .img_bg {
      position: absolute;
      top: 0;
      left: 0;
      margin: 24px 0 0 24px;
      width: 360px;
      height: 240px;
      background-color: #e6f0fa;
      z-index: -1;
    }
    .company_img {
      width: 360px;
    }
  }
}
/** 产品中心 */
.home_item_product {
  background-color: #00336a;
  .product_wrapper {
    padding: 62px 0;
    max-width: 1200px;
    margin: auto;
    color: white;
    .title_wrapper {
      text-align: center;
      .title_text {
        font-weight: bold;
        font-size: 34px;
      }
      .title_text_en {
        font-size: 14px;
      }
    }

    .product_content {
      margin-top: 24px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .product_item {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        .product_title {
          font-size: 18px;
          text-align: center;
        }

        .product_img {
          width: 200px;
        }
      }
    }
  }
}

/** 新闻资讯 */
.home_item_news {
  .news_wrapper {
    padding: 62px 0;
    max-width: 1200px;
    margin: auto;
    .title_wrapper {
      text-align: center;
      .title_text {
        font-weight: bold;
        font-size: 34px;
      }
      .title_text_en {
        font-size: 14px;
      }
    }

    .news_content {
      margin-top: 24px;
    }
  }
}
</style>
