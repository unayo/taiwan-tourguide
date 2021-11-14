<template>
  <div
    :style="`background-image: url('Object.values('${getapiData.Picture}).length < 1 ? require('../assets/images/img.png') : ${getapiData.Picture.PictureUrl1}');`"
    class="banner">
  </div>
  <div class="container my-5">
    <div class="row">
      <div class="col-12 col-md-8">
        <div>
          <span
            :style="color"
            class="badge py-1 px-2 mb-2" style="border-radius: 5px">{{ getapiData.Class }}</span>
          <span
            :style="color"
            class="badge py-1 px-2 mb-2 me-1" style="border-radius: 5px">{{ getapiData.Class1 }}</span>
          <span
            :style="color"
            class="badge py-1 px-2 mb-2" style="border-radius: 5px">{{ getapiData.Class2 }}</span>
        </div>
        <h2 class="mb-3" style="font-weight: 700">{{ getapiData.Name }}</h2>
        <p>{{ getapiData.Description }}</p>
      </div>
      <div class="col-12 col-md-4">
        <div class="card shadow-sm border-0 p-4 rounded-1">
          <p class="indent mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
            {{ getapiData.Address }}
          </p>
        </div>
        <div class="card shadow-sm border-0 p-4 rounded-1 my-4">
          <p class="indent mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
            {{ getapiData.Phone }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style lang="scss">
  .banner {
    background-size: cover;
    background-position: center center;
    height: 300px;
  }
  .indent {
    text-indent: -1rem;
  }
</style>

<script>
import JsSHA from 'jssha'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },
  data () {
    return {
      Id: '',
      type: '',
      selectCategory: '',
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
      const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/${this.selectCategory}?$filter=ID%20eq%20'${this.Id}'&$top=20&$format=JSON`
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
    console.log(this.Id.split('_')[0])
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
