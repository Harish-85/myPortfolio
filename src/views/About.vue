<template>
  <div style="margin-bottom: 80px;" >
    <h1>Hello! 👋</h1>



    <div class="paragraph">
      <div>
        I'm <strong>Harish N</strong>, a Game developer with expertise in <strong>Unity C# Programming, Shaders, and Realtime VFX.</strong>
        I have been working in game development for the past <strong>4 years</strong> and have worked on multiple projects in the past.
      </div>
      <div style="margin-top: 20px;">So far I've worked on 3 internships and several personal projects</div>
      <div style="margin-top: 20px;"><router-link to="/contact"><h3>CONTACT ME</h3>  </router-link></div>


      <h2 style="margin-bottom: -2px">Skills</h2>
      <div style="display: grid;grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );">
      <div class="skill-set">
        <h3>UNITY</h3>
        <SkillRate name="Unity C# Programming"  />
        <SkillRate name="Unity Shaders"  />
        <SkillRate name="Realtime VFX"  />

      </div>

      <div class="skill-set">
        <h3>PROGRAMMING</h3>
        <SkillRate name="C#"/>
        <SkillRate name="C++"/>
        <SkillRate name="HLSL"/>
        <SkillRate name="Python"/>
      </div>
      <div class="skill-set">
        <h3>SOFTWARE</h3>
        <SkillRate name="Unity" />
        <SkillRate name="Rider" />
        <SkillRate name="Github" />
        <SkillRate name="Blender" />

      </div>
      <div style="clear:both" />
      </div>



    </div>

    <div style="padding-right: 0px; padding-top: -100px">
      <img src="img/portfolioimg.png" alt="Photo of Harish" width="200px" height="200px"/>
    </div>

    <div style="clear:both"></div>
    <div style="margin-bottom: -20px">
      <h1>GAME PROJECTS</h1>
    </div>

    <div style="margin-bottom: 5px; margin-top: -50px">
      These are some of the games I've worked on in the past.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 0px;">
      There is more to see on <a target="_blank" href="https://unknown-coder.itch.io/">itch.io</a>
    </div>

    <div style="margin-bottom: 50px ;margin-top: 50px" >
      <h1>SYSTEMS</h1>
    </div>

    <div style="margin-bottom: 5px;margin-top: -50px">
      Here are some mechanics and small projects I've worked on that are not complete games.
    </div>
    <ProjectsList v-bind:projects="otherProjects" />

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>
<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";
import otherProjectsData from "@/data/OtherProjectsData.ts";
import SkillRate from "@/components/SkillRate.vue";
export default Vue.extend({
  name: "GameProjects",
  components: {
    SkillRate,
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