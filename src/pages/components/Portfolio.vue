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
                RENDERS
              </div>
              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/C01.jpg" class="img-raised" />
                    <img src="img/C01.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/C01.jpg" alt="" class="img-raised" />
                    <img src="img/C01.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Videos">
              <div slot="label" style="font-weight: bold;">
                VIDEOS
              </div>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/EXT-01.jpg" alt="" class="img-raised" />
                    <img src="img/EXT-01.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/EXT-01.jpg" alt="" class="img-raised" />
                    <img src="img/EXT-01.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Brochures">
              <div slot="label" style="font-weight: bold;">
                BROCHURESb
              </div>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/INT_01.jpg" alt="" class="img-raised" />
                    <img src="img/INT_01.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/INT_01.jpg" alt="" class="img-raised" />
                    <img src="img/INT_01.jpg" class="img-raised" />
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
