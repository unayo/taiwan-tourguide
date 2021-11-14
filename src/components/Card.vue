<template>
<div class="row my-5">
  <template v-for="item in cardItem" :key="item.ID">
    <div class="col-3 my-3">
      <a
        @click.prevent="itemsDetail(item.ID)"
        href="#" class="item">
        <div class="bg-shadow rounded-1 card bg-dark text-white">
          <img
            :src="Object.values(item.Picture).length < 1 ? require('../assets/images/img.png') : item.Picture.PictureUrl1"
            class="rounded-1 card-img h-100" alt="item.Picture.PictureDescription1">
          <div class="overlay">
            <div class="pin">
              <img src="../assets/images/pin.png" class="" alt="image">
            </div>
            <div class="detail">
              <span
                :style="color"
                class="badge py-1 px-2 mb-2" style="border-radius: 5px">{{ item.Class }}</span>
              <span
                :style="color"
                class="badge py-1 px-2 mb-2 me-1" style="border-radius: 5px">{{ item.Class1 }}</span>
              <span
                :style="color"
                class="badge py-1 px-2 mb-2" style="border-radius: 5px">{{ item.Class2 }}</span>
              <h5 class="card-title">{{ item.Name }}</h5>
              <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                {{ item.Address.substr(0, 3) }}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </template>
</div>
</template>

<style lang="scss">
  .item {
    &:hover {
      .bg-shadow {
        box-shadow: 0 8px 6px rgba(40, 41, 61, .45);
        transition: 1s;
      }
      img {
        transform: scale(1.1);
        transition: .5s;
      }
    }
    .card {
      height: 357px;
      border: none;
      overflow: hidden;
      img {
        object-fit: cover;
        transition: 1s;
      }
      .bg-shadow {
        transition: 1s;
      }
    }
  }
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 28%, rgba(0, 0, 0, 0.65) 100%);;
    .detail {
      position: absolute;
      left: 20px;
      bottom: 20px;
    }
    .pin {
      background-color: white;
      height: 60px;
      width: 60px;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 0 0 0 20px;
      img {
        height: 32px;
        width: 32px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>

<script>
export default {
  props: {
    cardItem: {
      // api
      type: Object,
      default () {
        return { }
      }
    },
    cardTag: {
      // 現在特色是哪個狀態
      default () {
        return { }
      }
    }
  },
  data () {
    return {
      color: 'background-color: #FF6F6E;'
    }
  },
  methods: {
    itemsDetail (id) {
      this.$router.push(`/tour/${id}`)
    }
  },
  watch: {
    cardTag: function () {
      switch (this.cardTag) {
        case 'Restaurant':
          this.color = 'background-color: #FF6F6E;'
          break
        case 'ScenicSpot':
          this.color = 'background-color: #00BBF0;'
          break
        case 'Hotel':
          this.color = 'background-color: #FDB44B;'
          break
        case 'Activity':
          this.color = 'background-color: #7879F1;'
          break
      }
    }
  }
}
</script>
