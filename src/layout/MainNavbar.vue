<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <img class="n-logo" src="img/02_LOGO BLANCO.png" alt="" style="width: 45px;"/>
      </router-link>
    </template>
    <template slot="navbar-menu">
      <drop-down
              tag="li"
              title="Servicios"
              icon="now-ui-icons design-2_ruler-pencil"
              class="nav-item"
      >
        <nav-link to="/#nuestros-servicios">
          <i class="now-ui-icons education_paper"></i> Diseño
        </nav-link>
        <nav-link to="/#nuestros-servicios">
          <i class="now-ui-icons users_circle-08"></i> Documentación
        </nav-link>
        <nav-link to="/#nuestros-servicios">
          <i class="now-ui-icons users_single-02"></i> Visualización
        </nav-link>
        <nav-link to="/conoce-mas">
          <i class="now-ui-icons users_single-02"></i> Conocé más
        </nav-link>
      </drop-down>


      <li class="nav-item">
        <a
          class="nav-link"
          href="/#portfolio"
        >
          <i class="now-ui-icons location_map-big"></i>
          <p>Portfolio</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          href="/#/conoce-mas"
          target="_blank"
        >
          <i class="now-ui-icons business_badge"></i>
          <p>Sobre nosotros</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          href="/#contacto"
        >
          <i class="now-ui-icons ui-1_email-85"></i>
          <p>Contacto</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Suscribite a nuestro canal de YouTube"
          data-placement="bottom"
          href="https://www.youtube.com/channel/UCujuxwfaWNjrlWHvf28F20g/"
          target="_blank"
        >
          <i class="fab fa-youtube"></i>
          <p class="d-lg-none d-xl-none">YouTube</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Síguenos en Facebook"
          data-placement="bottom"
          href=""
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Síguenos en Linkedin"
          data-placement="bottom"
          href=""
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
          <p class="d-lg-none d-xl-none">Linkedin</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Síguenos en Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/admestudio.arq/"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Escribinos a nuestero Whatsapp"
          data-placement="bottom"
          href="https://api.whatsapp.com/send?phone=541161511782"
          target="_blank"
        >
          <i class="fab fa-whatsapp"></i>
          <p class="d-lg-none d-xl-none">Whatsapp</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
