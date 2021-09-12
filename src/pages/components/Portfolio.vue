<template>
  <div class="section section-examples" data-background-color="black">
    <div class="container text-center">
      <div class="title">
        <h2 class="title">CONOCÉ NUESTRO TRABAJO</h2>
      </div>
      <div class="row">
          
          <tabs
            pills
            class="nav-align-center"
            tab-content-classes="gallery"
            type="primary"
          >
            <tab-pane title="Renders">
              <div slot="label" style="font-weight: bold;">
                BROCHURE
              </div>
              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/home/nuestro_trabajo/brochure/01_H_Brochure_2160.png" class="img-raised" />
                    <img src="img/home/nuestro_trabajo/brochure/02_H_Brochure_2160.png" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/home/nuestro_trabajo/brochure/03_H_Brochure_2160.png" alt="" class="img-raised" />
                    <img src="img/home/nuestro_trabajo/brochure/04_H_Brochure_2160.png" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Videos">
              <div slot="label" style="font-weight: bold;">
                BIM
              </div>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/home/nuestro_trabajo/bim/01_H_BIM_2160.jpg" alt="" class="img-raised" />
                    <img src="img/home/nuestro_trabajo/bim/02_H_BIM_2160.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/home/nuestro_trabajo/bim/03_H_BIM_2160.jpg" alt="" class="img-raised" />
                    <img src="img/home/nuestro_trabajo/bim/04_H_BIM_2160.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Brochures">
              <div slot="label" style="font-weight: bold;">
                RENDERS
              </div>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/home/nuestro_trabajo/renders/01_H_Render_2160.jpg" alt="" class="img-raised" />
                    <img src="img/home/nuestro_trabajo/renders/02_H_Render_2160.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/home/nuestro_trabajo/renders/03_H_Render_2160.jpg" alt="" class="img-raised" />
                    <img src="img/home/nuestro_trabajo/renders/04_H_Render_2160.jpg" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>
          </tabs>
        </div>
    </div>
  </div>
  
</template>
<script>
import { Tabs, TabPane } from '@/components';

export default {
  name: 'portfolio',
  bodyClass: 'profile-page',
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style></style>
