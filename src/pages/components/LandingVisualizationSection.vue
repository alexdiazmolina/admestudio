<template>
  <div class="section section-nucleo-icons">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <h2 class="title">VISUALIZACIÓN</h2>
          <h5 class="description">
            dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est
            ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa
            tincidunt nunc pulvinar sapien et ligula ullamcorper libero justo laoreet sit amet cursus sit amet
            dictum sit amet justo donec enim.</h5>
          <router-link
              class="btn btn-warning btn-round btn-lg"
              to="/"
              v-scroll-to="'#home-portfolio'"
              style="font-weight: bold;"
          >Ver portfolio</router-link>
          <a
              href="https://www.youtube.com/channel/UCujuxwfaWNjrlWHvf28F20g/"
              class="btn btn-warning btn-round btn-lg"
              target="_blank"
              style="font-weight: bold;"
          >Visita nuestro canal de YouTube</a>
        </div>
        <div class="col-lg-6 col-md-12">
          <img src="img/INT_01.jpg" alt="obra_plano" style="inline-size: -webkit-fill-available;">
        </div>
      </div>
      <div class="row" style="justify-content: center;">
        <a
            href="#conoce-mas-contacto"
            class="btn btn-primary btn-round btn-lg"
        >Pedinos más información</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
