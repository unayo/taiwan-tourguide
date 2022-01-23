<template>
  <div class="banner">
    <div class="d-flex justify-content-center align-items-center h-100">
      <h2 class="mt-phone noto-JP text-white">{{ selectCityTW.substr(0, 1) }}</h2>
      <h3 class="mt-phone noto-JP text-uppercase text-white px-0 mx-0 px-md-5 mx-md-5">{{ selectCity }}</h3>
      <h2 class="mt-phone noto-JP text-white">{{ selectCityTW.substr(1, 1) }}</h2>
    </div>
  </div>
  <div class="container position-relative" style="margin-top: -29px">
    <div class="row d-flex justify-content-center">
      <select
        v-model="selectCity"
        class="form-btn form-select shadow me-3" aria-label="city">
        <option selected value="">請選擇城市</option>
        <template v-for="item in Tourism" :key="item.city">
          <option :value="item.en">{{ item.city }}</option>
        </template>
      </select>
      <select
        v-model="selectCategory"
        class="form-btn form-select shadow me-3" aria-label="category">
        <option selected value="">選擇特色</option>
        <template v-for="item in Category" :key="item.name">
          <option :value="item.name">{{ item.tag }}</option>
        </template>
      </select>
      <button
        @click="clickSearch"
        type="button" class="search-btn btn btn-info shadow">
        <img src="../assets/images/search.svg" alt="search icon">
      </button>
    </div>
    <div class="map position-absolute">
      <router-link to="/map"
        type="submit" class="btn btn-light shadow">
        <img alt="map" src="@/assets/images/map.svg">
      </router-link>
    </div>
    <Card
      :card-item="getapiData"
      :card-tag="selectCategory"
    ></Card>
    <h4 class="text-center">{{ notFound }}</h4>
  </div>
  <Footer></Footer>
</template>

<style lang="scss">
  .banner {
    background-image: url('../assets/images/banner.png');
    background-size: cover;
    background-position: center center;
    height: 300px;
    h2 {
      font-size: 5rem;
    }
  }
  .map {
    top: -9px;
    right: 0;
    padding: 0.75rem;
  }
  .form-btn {
    width: 144px;
  }
  .search-btn {
    width: 63px;
  }
  // 手機版
  @media (max-width: 767px) {
    .map {
      top: -270px;
    }
    .mt-phone {
      margin-top: 108px;
    }
  }
</style>

<script>
import JsSHA from 'jssha'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'

export default {
  props: ['getProps'],
  emits: ['emit-home'],
  components: {
    Card,
    Footer
  },
  data () {
    return {
      homeInfo: this.getProps,
      selectCategory: 'Restaurant',
      selectCity: 'Tainan',
      selectCityTW: '台灣',
      Tourism: [
        {
          city: '臺北市',
          en: 'Taipei'
        },
        {
          city: '新北市',
          en: 'NewTaipei'
        },
        {
          city: '桃園市',
          en: 'Taoyuan'
        },
        {
          city: '臺中市',
          en: 'Taichung'
        },
        {
          city: '臺南市',
          en: 'Tainan'
        },
        {
          city: '高雄市',
          en: 'Kaohsiung'
        },
        {
          city: '基隆市',
          en: 'Keelung'
        },
        {
          city: '新竹市',
          en: 'Hsinchu'
        },
        {
          city: '新竹縣',
          en: 'HsinchuCounty'
        },
        {
          city: '苗栗縣',
          en: 'MiaoliCounty'
        },
        {
          city: '彰化縣',
          en: 'ChanghuaCounty'
        },
        {
          city: '南投縣',
          en: 'NantouCounty'
        },
        {
          city: '雲林縣',
          en: 'YunlinCounty'
        },
        {
          city: '嘉義縣',
          en: 'ChiayiCounty'
        },
        {
          city: '嘉義市',
          en: 'Chiayi'
        },
        {
          city: '屏東縣',
          en: 'PingtungCounty'
        },
        {
          city: '宜蘭縣',
          en: 'YilanCounty'
        },
        {
          city: '花蓮縣',
          en: 'HualienCounty'
        },
        {
          city: '臺東縣',
          en: 'TaitungCounty'
        },
        {
          city: '金門縣',
          en: 'KinmenCounty'
        },
        {
          city: '澎湖縣',
          en: 'PenghuCounty'
        },
        {
          city: '連江縣',
          en: 'LienchiangCounty'
        }
      ],
      Category: [
        {
          name: 'ScenicSpot',
          tag: '景點'
        },
        {
          name: 'Restaurant',
          tag: '美食'
        },
        {
          name: 'Hotel',
          tag: '旅宿'
        },
        {
          name: 'Activity',
          tag: '活動'
        }
      ],
      getapiData: [],
      notFound: ''
    }
  },
  methods: {
    apiID () {
      // API 驗證
      const AppID = process.env.VUE_APP_ID
      const AppKey = process.env.VUE_APP_KEY
      const GMTString = new Date().toGMTString()
      const ShaObj = new JsSHA('SHA-1', 'TEXT')
      ShaObj.setHMACKey(AppKey, 'TEXT')
      ShaObj.update('x-date: ' + GMTString)
      const HMAC = ShaObj.getHMAC('B64')
      const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`
      return { Authorization: Authorization, 'X-Date': GMTString }
    },
    getData () {
      const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/${this.selectCategory}/${this.selectCity}?$top=20&$format=JSON`
      this.$http.get(url,
        {
          headers: this.apiID()
        })
        .then((response) => {
          console.log('ok', response.data)
          this.getapiData = response.data
        })
        .catch(error => {
          console.log('error', error.response)
          if (error.response.statusText === 'Not Found') {
            this.notFound = '請選擇 城市 與 特色'
          }
        })
    },
    clickSearch () {
      this.getData()
      this.Tourism.forEach((item) => {
        if (item.en === this.selectCity) {
          this.selectCityTW = item.city.substr(0, 2)
        }
      })
    }
  },
  watch: {
    selectCity: function () {
      this.Tourism.forEach((item) => {
        if (item.en === this.selectCity) {
          this.selectCityTW = item.city.substr(0, 2)
        }
      })
    }
  },
  created () {
    // 初始推入首頁的資訊 props
    this.selectCity = this.homeInfo.City
    this.selectCategory = this.homeInfo.Category
    this.getData()
  }
}
</script>
