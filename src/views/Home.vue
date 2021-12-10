<template>
  <div class="home">
    <div class="h-100 container position-relative overflow-hdden">
      <img alt="rocket" class="rocket position-absolute" src="@/assets/images/rocket.png">
      <div class="h-100 row justify-content-center justify-content-md-end align-items-center">
          <div class="col-4">
          <h3>訂製你的專屬旅程</h3>
            <select
              v-model="getCity"
              class="form-select shadow mb-4" aria-label="city">
              <option selected value="">選擇城市</option>
              <template v-for="item in Tourism" :key="item.city">
                <option :value="item.en">{{ item.city }}</option>
              </template>
            </select>
          <select
            v-model="getCategory"
            class="form-select shadow mb-4" aria-label="food">
            <option selected value="">選擇特色</option>
            <template v-for="item in Category" :key="item.name">
              <option :value="item.name">{{ item.tag }}</option>
            </template>
          </select>
          <input type="text" class="form-control shadow mb-4" aria-describedby="keyword" placeholder="輸入關鍵字..">
          <div class="d-grid gap-2">
            <!-- @click="pushRouter" -->
            <button
              @click="emit"
              type="submit" class="btn btn-secondary text-white shadow">
              <img alt="logo" class="logo" src="@/assets/images/search.svg">
              搜尋
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  background-image: url('../assets/images/bg-home.png');
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  .h-100 {
    height: 100%;
  }
  .rocket {
    z-index: 1;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -45%);
    height: 80%;
    &::before {
      position: absolute;
      content: '這是一段文字';
      width: 50px;
      height: 50px;
      background: red;
      bottom: 0;
      left: 80px;
    }
  }
}
.form-select {
  background-image: url('../assets/images/caret-down-fill.svg');
  font-weight: 500;
  font-size: 1.2rem;
}
option {
  text-align: center;
}
.btn {
  font-weight: 500;
}
</style>

<script>
export default {
  name: 'Home',
  data () {
    return {
      getCity: '',
      getCategory: '',
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
      tour: []
    }
  },
  methods: {
    emit () {
      this.$emit('emit-home', this.getCity, this.getCategory)
      this.$router.push('/tour')
    }
  }
}
</script>
