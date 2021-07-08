<template>
  <div
    class="section section-signup"
    style="background-image: url('img/daniel-dinuzzo-qCjolcMFaLI-unsplash.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
  >
    <div class="container">
      <div class="row">
        <card class="card-signup" header-classes="text-center" color="orange">
          <template slot="header">
            <h3 class="card-title title-up">Contactanos</h3>
            <div class="social-line">
              <a
                href="#pablo"
                class="btn btn-neutral btn-linkedin btn-icon btn-round"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-whatsapp btn-icon btn-lg btn-round"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-instagram btn-icon btn-round"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </template>
          <template>
            
            <fg-input
              class="no-border"
              name="input-name"
              placeholder="Nombre..."
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>

            <fg-input
              class="no-border"
              name="input-phone"
              placeholder="Teléfono..."
              addon-left-icon="now-ui-icons text_caps-small"
            >
            </fg-input>

            <fg-input
              class="no-border"
              name="input-email"
              placeholder="Email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>

            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                placeholder="Escribe un mensaje..."
              >Hola! Quiero recibir información</textarea>
            </div>
          </template>
          <div class="card-footer text-center">
            <n-button type="neutral" round size="lg">Enviar</n-button>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, FormGroupInput, Button } from '@/components';

export default {
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
