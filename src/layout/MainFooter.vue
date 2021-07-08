<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <router-link v-popover:popover1 class="navbar-brand" to="/">
              <img class="n-logo" src="img/02_LOGO BLANCO.png" alt="" style="width: 45px;"/>
              Estudio
            </router-link>
          </li>
          <li>
            <a href="https:///presentation.creative-tim.com">
              Sobre Nosotros
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Designed by
        <a href="https:///www.invisionapp.com" target="_blank" rel="noopener"
          >Invision</a
        >. Coded by
        <a href="https://binarcode.com" target="_blank" rel="noopener"
          >BinarCode</a
        >
        and
        <a href="https://www.creative-tim.com" target="_blank" rel="noopener"
          >Creative Tim</a
        >. Adapted by
        <a href="https://www.linkedin.com/in/mperez91/" target="_blank" rel="noopener"
          >Martín Andrés Pérez</a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
