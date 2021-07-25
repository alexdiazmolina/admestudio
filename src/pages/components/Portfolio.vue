<template>
  <div class="section section-examples" data-background-color="black">
    <div class="container text-center">
      <div class="title">
        <h2 class="title">Conocé nuestro trabajo</h2>
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
                    <img src="img/home/portfolio/brochure/01_H_Brochure.png" class="img-raised" />
                    <img src="img/home/portfolio/brochure/02_H_Brochure.png" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/home/portfolio/brochure/03_H_Brochure.png" alt="" class="img-raised" />
                    <img src="img/home/portfolio/brochure/04_H_Brochure.png" alt="" class="img-raised" />
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
                    <img src="img/home/portfolio/bim/01_H_BIM.jpg" alt="" class="img-raised" />
                    <img src="img/home/portfolio/bim/02_H_BIM.png" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/home/portfolio/bim/03_H_BIM.jpg" alt="" class="img-raised" />
                    <img src="img/home/portfolio/bim/04_H_BIM.jpg" alt="" class="img-raised" />
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
                    <img src="img/home/portfolio/renders/01_H_Render.jpg" alt="" class="img-raised" />
                    <img src="img/home/portfolio/renders/02_H_Render.tif" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/home/portfolio/renders/03_H_Render.jpg" alt="" class="img-raised" />
                    <img src="img/home/portfolio/renders/04_H_Render.jpg" class="img-raised" />
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
