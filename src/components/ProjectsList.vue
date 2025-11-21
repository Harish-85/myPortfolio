<template>
    <div>
      <div class="projects-list">
        <template v-for="project in projects">
          <div
            :key="project.id"
              @click="showDetails(project)"
              class="project-item"
              :class="{ 'wide': project.isWide, 'high': project.isHigh }">
            <div class="project-item-image" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }">
              <!-- play a video bm2.mp4-->
            </div>

            <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
                <div class="title-text">
                  <b>{{ project.name}}</b> <br>
                  <font size = "2">{{ project.description }}</font>
                </div>

                <div class="icon">

                  <img :src="project.engineIcon" :style="{ height: project.height + 'px', width: project.width + 'px', padding: '5px' }" alt="test"/>

                </div>
              </div>
          </div>
        </template>
      </div>

      <ProjectDetailsOverlay
        v-on:close="showPopup = false"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :color="popupColor"
      />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: "",
      firstClick: true,
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      // if (event) {
      //   alert(event.target);
      // }
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.showPopup = true;
      window.scrollTo(0,0);
      this.firstClick = true;

      document.addEventListener("click", this.closePopup);

    },
    closePopup: function( event: MouseEvent) {
      //ignore the first click that opens the popup
      if (this.firstClick) {
        this.firstClick = false;
        return;
      }

      if (this.showPopup) {
        const dialog = document.querySelector(".dialog");
        if (dialog && !dialog.contains(event.target as Node)) {
          this.showPopup = false;
          this.firstClick = true;
          document.removeEventListener("click", this.closePopup);
        }
      }

    }
  },
});
</script>

<style scoped>

.project-item {
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
  animation-play-state: paused;
}
.project-item-image:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  animation-play-state: running;
}


.project-item:hover {
filter: brightness(120%);
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 75px;
  background-color: #222222;
}

.icon {
  float: right;
  padding: 10px;
  
}

.title-text {
  float : left;

  padding: 10px;

}

@media only screen and (min-width: 620px){
  .projects-list {
    max-width: 700px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(250px, auto);
  }

  .project-item {
    margin: 0px;
    min-height: 300px;
    height: 100%;
    width: 100%;
  }

  .wide {
    grid-column-end: span 2;
    min-height: 500px;
  }
  .high {
    grid-row-end: span 2;
  }
}



</style>