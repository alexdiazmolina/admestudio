<template>
  <div class="section section-nucleo-icons">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <h2 class="title">VISUALIZACIÓN</h2>
          <p>
            Realizamos todo tipo de imágenes digitales fotorrealistas, con el objetivo de poder sentir los 
            espacios antes que existan. Facilitan de gran manera la comprensión de los proyectos, como 
            también son una excelente herramienta para evaluar distintas alternativas de materiales y colores 
            a la hora de tomar una decisión.
          </p>
          <p>
            No sólo hacemos imágenes, también realizamos video recorridos, los cuales son una excelente alternativa.
            Sobre todo para la comercialización de productos arquitectónicos o desarrollos inmobiliarios, en los 
            cuales el posicionamiento en el mercado es fundamental.
          </p>
          <p>
            Parafraseando al dicho popular, un render vale más que mil palabras.
          </p>
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
        <div class="col-lg-6 col-md-12" style="align-self: center;">
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
