<template>
  <div
    class="section section-signup"
    style="background-image: url('img/home/02_Fondo-home-contacto.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
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
              v-model="form.name"
              placeholder="Nombre..."
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>

            <fg-input
              class="no-border"
              name="input-phone"
              v-model="form.phone"
              placeholder="Teléfono..."
              addon-left-icon="now-ui-icons text_caps-small"
            >
            </fg-input>

            <fg-input
              class="no-border"
              name="input-email"
              v-model="form.email"
              placeholder="Email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>

            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                v-model="form.message"
                rows="4"
                cols="80"
                placeholder="Escribe un mensaje..."
              ></textarea>
            </div>
          </template>
          <div class="card-footer text-center">
            <n-button type="neutral" round size="lg" @click="sendEmail">Enviar</n-button>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
/* function sendEmail(){
  window.open('mailto:your@email.address?subject=Comments about the color blue');
} */
import { Card, FormGroupInput, Button } from '@/components';
import emailjs from 'emailjs-com';
export default {
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  methods: {
    sendEmail() {
      if (this.form.name == '' || this.form.phone == '' || this.form.email == '') {
        alert("Debe completar todos los campos")
      } else {
        var tempParams = {
          name: this.form.name,
          message: this.form.message,
          phone: this.form.phone,
          email: this.form.email,
        }
        emailjs.init("user_1IJRvpHRSEitYB4Qqs3vk");
        emailjs.send('service_lsxrqpq', 'template_fy8hlpm', tempParams)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert("Se envío el correo. Gracias por contactarnos!");
        }, (error) => {
          console.log('FAILED...', error);
          alert(error);
        });

      }
    },
  },
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        message: 'Hola ADM Estudio! Quiero recibir información!',
        content: ''
      }
    };
  }
};

</script>
<style></style>
