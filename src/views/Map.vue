<template>
  <div class="position-relative">
    <div class="btn-city">
      <div class="select-group">
        <div class="d-flex">
          <select
          v-model="selectCitymap"
          class="form-select shadow me-3" aria-label="city">
            <option value="">選擇城市</option>
            <template v-for="item in Tourism" :key="item.city">
              <option :value="item.en">{{ item.city }}</option>
            </template>
          </select>
          <select
            v-model="selectCategorymap"
            class="form-select shadow me-3" aria-label="category">
            <option selected value="">選擇特色</option>
            <template v-for="item in Category" :key="item.name">
              <option :value="item.name">{{ item.tag }}</option>
            </template>
          </select>
          <button
            @click="this.getData()"
            type="button" class="search-btn btn btn-info shadow">
            <img src="../assets/images/search.svg" alt="search icon">
          </button>
        </div>
        <router-link to="/tour"
          type="button" class="search-btn btn btn-light shadow">
          <img src="../assets/images/list.svg" alt="search icon">
        </router-link>
      </div>
      <Card
      :card-item="getapiMap"
      class="card-show flex-nowrap w-100"></Card>
    </div>
    <div id="mapid"></div>
    <div class="over-color"></div>
  </div>
</template>

<style lang="scss">
  #mapid {
    height: 100vh;
    z-index: 0;
    opacity: 0.95;
  }
  .over-color {
    background-color: #00BBF0;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .card-show {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    overflow-x: scroll;
    bottom: 0;
    .card-item {
      width: 245px;
    }
    // ipad版
    @media (max-width: 882px) and (min-width: 539px){
      .card-item {
        width: 200px;
      }
    }
    // 手機版
    @media (max-width: 539px) {
      .card-item {
        width: 160px;
      }
    }
  }
  .btn-city {
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    z-index: 1;
    .select-group {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

<script>
import Card from '../components/Card.vue'
import JsSHA from 'jssha'
import L from 'leaflet'

export default {
  name: 'LeafletMap',
  components: {
    Card
  },
  data () {
    return {
      mymap: null,
      selectCitymap: 'Tainan',
      selectCategorymap: 'Restaurant',
      getapiMap: [],
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
      ]
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
      const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/${this.selectCategorymap}/${this.selectCitymap}?$top=30&$format=JSON`
      this.$http.get(url,
        {
          headers: this.apiID()
        })
        .then((response) => {
          console.log('ok', response.data)
          this.getapiMap = response.data
          // 圖標
          this.setMarker()
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    setupMap () {
      this.mymap = L.map('mapid').setView([23.148340225219727, 120.1084213256836], 15)

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidW5heW8iLCJhIjoiY2t1d2EwNzZpMGh2aDJ3cmYwdWJnb2hudyJ9.XcnKuVJN2Q50urzdA594WQ'
      }).addTo(this.mymap)
    },
    // 圖標
    setMarker () {
      this.getapiMap.forEach((item) => {
        if (item.ID.match('C3')) {
          // 美食
          console.log('item', item)
          const MyIcon = new L.Icon({
            iconUrl: require('@/assets/images/icon-C3.svg'),
            iconSize: [36, 44]
          })
          // [先緯度, 後經度]
          L.marker([item.Position.PositionLat, item.Position.PositionLon], { icon: MyIcon }).addTo(this.mymap)
            .bindPopup(`<p> ${item.Name}</p>`)
        } else if (item.ID.match('C4')) {
          // 旅宿
          const MyIcon = new L.Icon({
            iconUrl: require('@/assets/images/icon-C4.svg'),
            iconSize: [36, 44]
          })
          // [先緯度, 後經度]
          L.marker([item.Position.PositionLat, item.Position.PositionLon], { icon: MyIcon }).addTo(this.mymap)
            .bindPopup(`<p> ${item.Name}</p>`)
        } else if (item.ID.match('C1')) {
          // 景點
          const MyIcon = new L.Icon({
            iconUrl: require('@/assets/images/icon-C1.svg'),
            iconSize: [36, 44]
          })
          // [先緯度, 後經度]
          L.marker([item.Position.PositionLat, item.Position.PositionLon], { icon: MyIcon }).addTo(this.mymap)
            .bindPopup(`<p> ${item.Name}</p>`)
        } else if (item.ID.match('C2')) {
          // 活動
          const MyIcon = new L.Icon({
            iconUrl: require('@/assets/images/icon-C2.svg'),
            iconSize: [36, 44]
          })
          // [先緯度, 後經度]
          L.marker([item.Position.PositionLat, item.Position.PositionLon], { icon: MyIcon }).addTo(this.mymap)
            .bindPopup(`<p> ${item.Name}</p>`)
        }
      })
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.setupMap()
  }
}
</script>
