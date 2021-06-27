<template>
  <div class="section section-tabs" id="carousel">
    <div class="container">
      <div class="title">
        <h2 class="title">Conocé nuestro trabajo</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <el-carousel height="500px">
            <el-carousel-item>
              <img class="d-block" src="img/INT_01.jpg" alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Lorem Ipsum</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/C01.jpg" alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Lorem Ipsum</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/EXT-01.jpg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Lorem Ipsum</h5>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <a
              href="/landing"
              class="btn btn-primary btn-round btn-lg"
              target="_blank"
              >Ver portfolio</a>
    </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>
<style></style>
