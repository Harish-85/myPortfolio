<template>
  <div>
    <div style="margin-bottom: -50px">
      <h1>GAME PROJECTS</h1>
    </div>

    <div style="margin-bottom: 30px;">
      These are some of the games I've worked on in the past.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      There is more to see on <a target="_blank" href="https://unknown-coder.itch.io/">itch.io</a>
    </div>

    <div style="margin-bottom: -50px">
    <h1>MINI PROJECTS</h1>
    </div>

    <div style="margin-bottom: 30px;">
      Here are some mechanics and small projects I've worked on that are not complete games.
    </div>
    <ProjectsList v-bind:projects="otherProjects" />

  </div>
</template>
<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";
import otherProjectsData from "@/data/OtherProjectsData.ts";
export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
      otherProjects: otherProjectsData,
    };
  },
});

</script>


