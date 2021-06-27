<template>
  <div class="section section-tabs">
    <div class="container">
      <div id="nuestros-servicios" class="title">
        <h2 class="title">Nuestros servicios</h2>
      </div>
      <div class="row" style="justify-content: center;">
        <div class="col-md-10 ml-auto col-xl-6 mr-auto" >
          <card>
            <tabs
              slot="raw-content"
              tab-content-classes="tab-content-padding text-center"
            >
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons shopping_shop"></i> Diseño
                </template>
                <img class="d-block" src="img/nuestros-servicios/ejemplo.jpeg" alt="First slide" style="width: 50%; margin:auto" />
                <p>
                  Diseñamos obra nueva, interiores y remodelaciones. Realizamos presentaciones de proyectos, láminas y catálogos.
                </p>
                
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons shopping_cart-simple"></i> Documentación
                </template>
                <img class="d-block" src="img/nuestros-servicios/ejemplo.jpeg" alt="First slide" style="width: 50%; margin:auto" />
                <p>
                  Realizamos documentación ejecutiva con software BIM de todo tipo de proyectos.
                </p>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons objects_umbrella-13"></i> Visualización
                </template>
                <img class="d-block" src="img/nuestros-servicios/ejemplo.jpeg" alt="First slide" style="width: 50%; margin:auto" />
                <p>
                  Realizamos todo tipo de imágenes: Realistas, esquemas, plantas y cortes 3D. Recorridos en videos y Renders 360°.
                </p>
              </tab-pane>
            </tabs>
          </card>
        </div>
        <div class="col-md-10 ml-auto col-xl-6 mr-auto">
          
        <!-- End Tabs on plain Card -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Tabs, TabPane } from '@/components';

export default {
  components: {
    Card,
    Tabs,
    TabPane
  }
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>
