<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/daniel-dinuzzo-qCjolcMFaLI-unsplash.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Te invitamos a conocernos aún más</h1>
        </div>
      </div>
    </div>
    <landing-design-section></landing-design-section>
    <landing-documentation-section></landing-documentation-section>
    <landing-visualization-section></landing-visualization-section>

    <div class="section section-about-us" data-background-color="black">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">¿QUIÉNES SOMOS?</h2>
            <h5 class="description">
              ADM Estudio nació en 2016, brindando servicios de dibujo de planos para arquitectos,
              constructoras y estudios. Con el paso del tiempo y las distintas capacitaciones comenzamos a
              implementar la visualización para proyectos y diseño.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/obra_01.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "Somos creativos y proactivos, nos esforzamos al máximo para aplicarlo en cada proyecto y
                  relación con el cliente. Nuestro desafío es potenciar y crear valor agregado en los futuros
                  proyectos de arquitectura."
                  <br />
                  <br />
                  <small>Alan Di Mauro</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->

            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/obra_02.jpg')"
              ></div>
              <h3>
                Somos un equipo integrado por Arquitectos y profesionales de la construcción,
                con experiencia en el rubro.
              </h3>
              <p>
                Nuestro servicio es 100% personalizado y adaptable a
                cualquier tipo de proyecto.
                Realizamos encargos de visualización para terceros, como arquitectos, diseñadores de
                interiores, particulares e inmobiliarias, como también proyectos de obra nueva y remodelaciones
                con nuestro diseño.
              </p>
              <p>
                Somos creativos y proactivos, nos esforzamos al máximo para aplicarlo en cada proyecto y
                relación con el cliente. Nuestro desafío es potenciar y crear valor agregado en los futuros
                proyectos de arquitectura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center" >
      <div class="container">
        <h2 class="title">EL EQUIPO</h2>
        <div class="team">
          <div class="row" style="justify-content: center;">
            <div class="col-md-4">
              <div class="team-player">
                <img
                    src="img/avatar.jpg"
                    alt="Thumbnail Image"
                    class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Romina Hadid</h4>
                <p class="category text-primary">Model</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-instagram"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-facebook-square"></i
                ></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <signup-form></signup-form>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import LandingDesignSection from "@/pages/components/LandingDesignSection";
import LandingDocumentationSection from "@/pages/components/LandingDocumentationSection";
import LandingVisualizationSection from "@/pages/components/LandingVisualizationSection";
import SignupForm from "@/pages/components/SignupForm";
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    SignupForm,
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
