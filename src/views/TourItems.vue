<template>
  <img
  :src="getapiData.Picture?.PictureUrl1 || require('../assets/images/banner.png')"
  class="banner-image" :alt="getapiData.Picture?.PictureDescription1 || 'banner'"
  :title="getapiData.Picture?.PictureDescription1 || ''">
  <div class="container my-5">
    <div class="row">
      <div class="col-12 col-md-8">
        <h6 class="d-inline-block border-primary border border-2 rounded-1 px-3 py-2 mb-3">
          {{ getapiData.City }}
          <span
            :style="color"
            class="badge py-1 px-2 me-1" style="border-radius: 5px">{{ getapiData.Class }}</span>
          <span
            :style="color"
            class="badge py-1 px-2 me-1" style="border-radius: 5px">{{ getapiData.Class1 }}</span>
          <span
            :style="color"
            class="badge py-1 px-2 me-1" style="border-radius: 5px">{{ getapiData.Class2 }}</span>
        </h6>
        <h2 class="mb-3" style="font-weight: 700">
          {{ getapiData.Name }}
          <!-- 旅宿星級 -->
          <span
            v-if="getapiData['Grade'] != undefined "
            class="fs-5 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            {{ getapiData.Grade }}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
          </span>
        </h2>
        <h5 v-if="getapiData['StartTime'] != undefined">
          活動時間：
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
          </svg>
          {{ getapiData.StartTime.substr(0, 10) }} ~
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
          </svg>
          {{ getapiData.EndTime.substr(0, 10) }}</h5>
        <h5 v-if="getapiData['Organizer'] != undefined">組織：{{ getapiData.Organizer }}</h5>
        <!-- 網址 -->
        <a
          v-if="getapiData['WebsiteUrl'] != undefined"
          :href="getapiData.WebsiteUrl"
          class="text-success mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
          </svg>
          店家連結
        </a>
        <p class="my-4">{{ getapiData.Description }}</p>
        <!-- 提供服務 -->
        <p v-if="getapiData['Spec'] != undefined" class="mb-1">房價特惠：{{ getapiData.Spec }}</p>
        <p v-if="getapiData['ServiceInfo'] != undefined" class="mb-1">設施服務：{{ getapiData.ServiceInfo }}</p>
        <p v-if="getapiData['ParkingInfo'] != undefined" class="mb-1">停車：{{ getapiData.ParkingInfo }}</p>
        <p v-if="getapiData['TravelInfo'] != undefined" class="mb-1">前往路線：{{ getapiData.TravelInfo }}</p>
      </div>
      <div class="col-12 col-md-4">
        <div v-if="getapiData['Location']"
          class="card shadow-sm border-0 p-4 rounded-1">
          <h6>{{ getapiData.Location }}</h6>
          <p class="indent mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            {{ getapiData.Address }}
          </p>
        </div>
        <div v-if="getapiData['Phone']" class="card shadow-sm border-0 p-4 rounded-1 my-4">
          <p class="indent mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
            {{ getapiData.Phone }}
          </p>
          <p v-if="getapiData['Fax'] != undefined" class="ms-1 mb-0">
            {{ getapiData.Fax }}
          </p>
        </div>
        <!-- 開放時間 -->
        <div v-if="getapiData['OpenTime'] != undefined"
          class="card shadow-sm border-0 p-4 rounded-1 my-4">
          <p class="indent mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            </svg>
            <span class="h6 ms-1">開放時間</span><br>
            {{ getapiData.OpenTime }}
          </p>
        </div>
        <!-- 票價 -->
        <div v-if="getapiData['TicketInfo'] != undefined"
          class="card shadow-sm border-0 p-4 rounded-1 my-4">
          <p class="indent mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ticket-perforated-fill" viewBox="0 0 16 16">
              <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4-1v1h1v-1H4Zm1 3v-1H4v1h1Zm7 0v-1h-1v1h1Zm-1-2h1v-1h-1v1Zm-6 3H4v1h1v-1Zm7 1v-1h-1v1h1Zm-7 1H4v1h1v-1Zm7 1v-1h-1v1h1Zm-8 1v1h1v-1H4Zm7 1h1v-1h-1v1Z"/>
            </svg>
            <span class="h6 ms-1">價目表</span><br>
            {{ getapiData.TicketInfo }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style lang="scss">
  .banner-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .indent {
    text-indent: -1rem;
  }
</style>

<script>
import JsSHA from 'jssha'
import Footer from '@/components/Footer.vue'

export default {
  props: ['getProps'],
  emits: ['emit-home'],
  components: {
    Footer
  },
  data () {
    return {
      Id: '',
      type: '',
      selectCategory: '',
      categoryID: '',
      color: '',
      getapiData: {}
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
      const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/${this.selectCategory}?$filter=${this.selectCategory}ID%20eq%20'${this.Id}'&$top=20&$format=JSON`
      console.log('url', url)
      this.$http.get(url,
        {
          headers: this.apiID()
        })
        .then((response) => {
          this.getapiData = response.data[0]
        })
        .catch(error => {
          console.log('error', error.response)
        })
    }
  },
  created () {
    this.Id = this.$route.params.id
    console.log(this.Id)
    // console.log(this.Id.split('_')[0])
    this.type = this.Id.split('_')[0]
    switch (this.type) {
      case 'C1':
        this.selectCategory = 'ScenicSpot'
        this.color = 'background-color: #00BBF0;'
        break
      case 'C2':
        this.selectCategory = 'Activity'
        this.color = 'background-color: #7879F1;'
        break
      case 'C3':
        this.selectCategory = 'Restaurant'
        this.color = 'background-color: #FF6F6E;'
        break
      case 'C4':
        this.selectCategory = 'Hotel'
        this.color = 'background-color: #FDB44B;'
        break
    }
    this.getData()
  }
}
</script>
