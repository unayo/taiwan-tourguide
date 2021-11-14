<template>
  <div class="footer position-relative">
    <img class="ellipse-left" src="@/assets/images/ellipse.svg" alt="ellipse">
    <img class="ellipse-right" src="@/assets/images/ellipse.svg" alt="ellipse">
    <div class="container position-relative">
      <div class="row">
        <div class="col-12 col-md-4">
          <router-link to='/'>
            <img class="logo" src="@/assets/logo.svg" alt="Logo">
          </router-link>
        </div>
        <div class="col-12 col-md-8">
          <div class="social-icon mb-4">
            <img src="@/assets/images/line.png" alt="Line">
            <img class="mx-3" src="@/assets/images/fb.png" alt="Facebook">
            <img src="@/assets/images/ig.png" alt="Instrgram">
          </div>
          <p class="mb-2 text-white">聯絡專線：0288-756-623</p>
          <p class="text-white">服務據點：台北市中山區明水路636號</p>
          <div class="text-white my-5">
            |<router-link to='/' class="text-white mx-5 fw-bolder">我的行程</router-link>
            |<router-link to='/' class="text-white mx-5 fw-bolder">找美食</router-link>
            |<router-link to='/' class="text-white mx-5 fw-bolder">找景點</router-link>
            |<router-link to='/' class="text-white mx-5 fw-bolder">找旅宿</router-link>
            |<router-link to='/' class="text-white mx-5 fw-bolder">找活動</router-link>|
          </div>
          <small class="text-white">© 2021 Copyright LET’S GO | Design.Rey Chang, Frontend.Ayo</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .footer {
    padding-top: 164px;
    padding-bottom: 62px;
    background-image: url('../assets/images/footer.png');
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    overflow: hidden;
    .logo {
      width: 14rem;
    }
    .social-icon {
      img {
        width: 2rem;
      }
    }
    .ellipse-left {
      position: absolute;
      bottom: -15%;
      left: -4%;
      width: 24rem;
    }
    .ellipse-right {
      position: absolute;
      bottom: 28%;
      right: 0;
      width: 12rem;
    }
  }
</style>
