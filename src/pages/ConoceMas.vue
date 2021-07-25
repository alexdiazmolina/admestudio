<template>
  <div>
    <div class="page-header page-header-small clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/conoce-mas-landing/01_LAND_superior.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Te invitamos a conocernos aún más</h1>
        </div>
      </div>
    </div>
    <div class="section section-team text-center" style="background-image:url('img/imageedit_1_3740289679.png')">
      <div class="row" style="justify-content: center;" >
        <h1 class="title">NUESTROS SERVICIOS</h1>
      </div>
      <landing-design-section></landing-design-section>
      <landing-documentation-section></landing-documentation-section>
      <landing-visualization-section></landing-visualization-section>
    </div>
    <div class="section section-about-us" data-background-color="black" id="quienes-somos" style="background-image:url('img/imageedit_1_3740289679.png')">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">¿QUIÉNES SOMOS?</h2>
            <h5 class="description">
              Un equipo apasionado por la arquitectura, las nuevas tecnologías constructivas y de softwares en pos de trasladar todo beneficio hacia el proyecto y nuestros clientes. Nos encontramos en constante capacitación y en contacto con los principales referentes del sector.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/conoce-mas-landing/05_LAND_QUIENES SOMOS.jpg')"
              >
                <!-- First image on the left side -->
              </div>
              <!-- Second image on the left side of the article -->

            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/conoce-mas-landing/06_LAND_QUIENES SOMOS.jpg')"
              ></div>

            </div>
          </div>
          <div class="row">
            <h3>
              Nuestro equipo está integrado por arquitectos y profesionales de la construcción con amplia experiencia en el rubro
            </h3>
            <p>
              Ofrecemos servicios a nuestros clientes de manera adaptable y 100% personalizados. Nuestro objetivo es, mediante nuestro método participativo, incluir a los futuros usuarios de los espacios proyectados en la etapa de diseño. De esta manera, juntos lograremos un proyecto a la medida de sus necesidades, actuales o futuras. 
            </p>
            <p>
              Somos creativos y proactivos, nos esforzamos al máximo para aplicarlo en cada proyecto y vínculos con nuestros clientes. Nuestro desafío es potenciar y crear valor agregado en los futuros proyectos de arquitectura.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center" style="background-image:url('img/imageedit_1_3740289679.png')">
      <div class="container">
        <h2 class="title">EL EQUIPO</h2>
        <div class="team">
          <div class="row" style="justify-content: center;">
            <div class="col-md-4">
              <div class="team-player">
                <img
                    src="img/conoce-mas-landing/alandimauro.jpeg"
                    alt="Thumbnail Image"
                    class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Alan Di Mauro</h4>
                <p class="category text-primary">Arquitecto BIM</p>
                <p class="description">
                  Egresado de la Universidad de Buenos Aires, con experiencia en diseño, documentación de proyectos, dirección de obra y utilización de software BIM. Músico frustrado y amante de la F1.
                </p>
                <a href="https://www.linkedin.com/in/alandimauro/" target="_blank" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-linkedin"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                    src="img/conoce-mas-landing/alexdiazmolina.jpeg"
                    alt="Thumbnail Image"
                    class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Alex Díaz Molina</h4>
                <p class="category text-primary">Arquitecto BIM</p>
                <p class="description">
                  Egresado de la Universidad de Buenos Aires, trabajo en Estudio Estereotómico. Docente de Archicad, manejo de tecnologías BIM. Desarrollo en renderizado, animación, postproducción.
                </p>
                <a href="https://www.linkedin.com/in/alex-diaz-molina-807435125/" target="_blank" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-linkedin"></i
                ></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <contac-us-form id="conoce-mas-contacto"></contac-us-form>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import LandingDesignSection from "@/pages/components/LandingDesignSection";
import LandingDocumentationSection from "@/pages/components/LandingDocumentationSection";
import LandingVisualizationSection from "@/pages/components/LandingVisualizationSection";
import ContacUsForm from "@/pages/components/ContacUsForm";
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    ContacUsForm,
    LandingVisualizationSection,
    LandingDocumentationSection,
    LandingDesignSection,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style></style>
