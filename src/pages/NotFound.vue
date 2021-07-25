<template>
  <div>
    <div class="section section-about-us" data-background-color="black" >
      <div class="content-center" style="margin-top: 100px;">
        <div class="container">
          <div class="row" style="justify-content: center;">
            <h1>Ups! Este contenido no existe.</h1>
          </div>
          <div class="row" style="justify-content: center;">
            <router-link
                class="btn btn-warning btn-round btn-lg"
                to="/"
                style="font-weight: bold;"
            >Volver al inicio</router-link>
          </div>
        </div>
      </div>
    </div>
    <contac-us-form id="conoce-mas-contacto"></contac-us-form>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import ContacUsForm from "@/pages/components/ContacUsForm";
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    ContacUsForm,
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
