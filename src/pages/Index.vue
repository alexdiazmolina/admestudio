<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/daniel-dinuzzo-qCjolcMFaLI-unsplash.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/02_LOGO BLANCO.png" alt=""/>
          <h1 class="h1-seo">ESTUDIO DE ARQUITECTURA</h1>
          <h3>Hacemos realidad tu sueño.</h3>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 id="nuestros-servicios" class="title">Nuestros servicios</h2>
        <div class="team">
          <div class="row">
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/disenio.png"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                  style="width: 250px;"
                />
                <h4 class="title">
                <a
                  href="/landing"
                  class="btn btn-default btn-round btn-lg"
                  style="font-weight: bold;"
                  target="_blank"
                  >DISEÑO</a>
                </h4>
                <p class="description">
                  Diseñamos obra nueva, interiores y remodelaciones. Realizamos presentaciones de proyectos, láminas y catálogos.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/disenio.png"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                  style="width: 250px;"
                />
                <h4 class="title">
                <a
                href="/landing"
                class="btn btn-default btn-round btn-lg"
                style="font-weight: bold;"
                target="_blank"
                >DOCUMENTACION</a>
                </h4>
                <p class="description">
                  Realizamos documentación ejecutiva con software BIM de todo tipo de proyectos.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/disenio.png"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                  style="width: 250px;"
                />
                <h4 class="title">
                <a
                  href="/landing"
                  class="btn btn-default btn-round btn-lg"
                  style="font-weight: bold;"
                  target="_blank"
                  >VISUALIZACION</a>
                </h4>
                <p class="description">
                  Realizamos todo tipo de imágenes: Realistas, esquemas, plantas y cortes 3D. Recorridos en videos y Renders 360°
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <carousel-section></carousel-section> -->
    <examples-section></examples-section>
    <!-- <tabs-section></tabs-section>
    <nucleo-icons-section></nucleo-icons-section> -->

    <!-- <basic-elements></basic-elements> -->
    <!-- <navigation></navigation> -->
    <!-- <progress-pagination></progress-pagination> -->
    <!-- <notifications></notifications> -->
    <!-- <typography></typography> -->
    
    <!-- <javascript-components></javascript-components> -->
    <signup-form></signup-form>
    
    <!-- <download-section></download-section> -->
  </div>
</template>
<script>
import { Parallax } from '@/components';
// import BasicElements from './components/BasicElementsSection';
// import Navigation from './components/Navigation';
// import TabsSection from './components/Tabs';
// import ProgressPagination from './components/ProgressPagination';
// import Notifications from './components/Notifications';
// import Typography from './components/Typography';
// import JavascriptComponents from './components/JavascriptComponents';
// import CarouselSection from './components/CarouselSection';
// import NucleoIconsSection from './components/NucleoIconsSection';
import SignupForm from './components/SignupForm';
import ExamplesSection from './components/ExamplesSection';
// import DownloadSection from './components/DownloadSection';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    // BasicElements,
    // Navigation,
    // TabsSection,
    // ProgressPagination,
    // Notifications,
    // Typography,
    // JavascriptComponents,
    // CarouselSection,
    // NucleoIconsSection,
    SignupForm,
    ExamplesSection,
    //DownloadSection
  }
};
</script>
<style></style>
