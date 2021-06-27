<template>
  <div class="section section-examples" data-background-color="black">
    <div class="space-50"></div>
    <div class="container text-center">
      <div class="title">
        <h2 class="title">Conocé nuestro trabajo</h2>
      </div>
      <div class="row">
        <div class="col">
          <router-link to="/landing" target="_blank">
            <img src="img/EXT-01.jpg" alt="Image" class="img-raised" />
          </router-link>
          <router-link
            to="/landing"
            class="btn btn-simple btn-primary btn-round"
            >View Landing Page
          </router-link>
        </div>
        <div class="col">
          <router-link to="/profile" target="_blank">
            <img src="img/C01.jpg" alt="Image" class="img-raised" />
          </router-link>
          <router-link
            to="/profile"
            class="btn btn-simple btn-primary btn-round"
            >View Profile Page</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
