<template>
  <div class="home">
    <div class="h-100 container position-relative overflow-hdden">
      <img alt="rocket" class="rocket position-absolute" src="@/assets/images/rocket.png">
      <div class="h-100 row justify-content-center justify-content-md-end align-items-center">
          <div class="col-4">
          <h3>訂製你的專屬旅程</h3>
            <select class="form-select shadow mb-4" aria-label="city">
              <option selected>選擇城市</option>
              <template v-for="item in Tourism" :key="item.city">
                <option :value="item.val">{{ item.city }}</option>
              </template>
            </select>
          <select class="form-select shadow mb-4" aria-label="food">
            <option selected>選擇特色</option>
            <template v-for="item in Category" :key="item.name">
              <option :value="item.val">{{ item.tag }}</option>
            </template>
          </select>
          <input type="text" class="form-control shadow mb-4" aria-describedby="keyword" placeholder="輸入關鍵字..">
          <div class="d-grid gap-2">
            <button
              @click="pushRouter"
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
      Tourism: [
        {
          city: '臺北市',
          val: 1
        },
        {
          city: '新北市',
          val: 2
        },
        {
          city: '桃園市',
          val: 3
        },
        {
          city: '臺中市',
          val: 4
        },
        {
          city: '臺南市',
          val: 5
        },
        {
          city: '高雄市',
          val: 6
        },
        {
          city: '基隆市',
          cal: 7
        },
        {
          city: '新竹市',
          val: 8
        },
        {
          city: '新竹縣',
          val: 9
        },
        {
          city: '苗栗縣',
          val: 10
        },
        {
          city: '彰化縣',
          val: 11
        },
        {
          city: '南投縣',
          val: 12
        },
        {
          city: '雲林縣',
          val: 13
        },
        {
          city: '嘉義縣',
          val: 14
        },
        {
          city: '嘉義市',
          val: 15
        },
        {
          city: '屏東縣',
          val: 16
        },
        {
          city: '宜蘭縣',
          val: 17
        },
        {
          city: '花蓮縣',
          val: 18
        },
        {
          city: '臺東縣',
          val: 19
        },
        {
          city: '金門縣',
          val: 20
        },
        {
          city: '澎湖縣',
          val: 21
        },
        {
          city: '連江縣',
          val: 22
        }
      ],
      Category: [
        {
          name: 'ScenicSpot',
          tag: '景點',
          val: 1
        },
        {
          name: 'Restaurant',
          tag: '餐飲',
          val: 2
        },
        {
          name: 'Hotel',
          tag: '旅宿',
          val: 3
        },
        {
          name: 'Activity',
          tag: '活動',
          val: 4
        }
      ],
      tour: []
    }
  },
  methods: {
    pushRouter () {
      this.$router.push('/tour')
    }
  }
}
</script>
