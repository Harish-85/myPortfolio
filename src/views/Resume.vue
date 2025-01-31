<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Harish N</strong>, game developer with experience in C# and Unity. I have a passion for creating unique game mechanics and I'm always looking for new challenges.
      <br />I've also worked on Shaders and VFX for games. I'm a quick learner and I'm always looking to improve my skills.
      <br />
      <br />I'm currently looking for new opportunities. If you think I could be a good fit for your team, feel free to
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides game development, I also work on non-game projects

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="img/Resume.pdf" target="_blank" download="img/resume"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <strong><h2>Work experience</h2></strong>

      <h3><strong>Gamestacy</strong> <br><i> Game Developer Intern</i></h3>
      <h4>Nov 2022 - Dec 2022</h4>

      <h3><strong>Qila Games</strong> <br><i> Game Developer Intern</i></h3>
      <h4>August 2024 - Present</h4>


      <h3><strong>Kleanup Games</strong> <br><i> Game Developer</i></h3>
      <h4> November 2024 - Present</h4>


      <h2>Skills</h2>

      <div class="skill-set">
        <h3>UNITY</h3>
        <SkillRate name="Unity C# Programming"  />
        <SkillRate name="Unity Shaders"  />
        <SkillRate name="Realtime VFX"  />

      </div>

      <div class="skill-set">
        <h3>PROGRAMMING</h3>
        <SkillRate name="C#  C++" />
        <SkillRate name="Python HLSL" />

      </div>
      <div class="skill-set">
        <h3>SOFTWARE</h3>
        <SkillRate name="Unity" />
        <SkillRate name="Rider" />
        <SkillRate name="Github" />
        <SkillRate name="Blender" />

      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>B.Sc (Hons) Computer Science and Game Development</h3>
      <h4>Backstage Pass Institute of Gaming</h4>
      <div>2022 - 2026</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Fluent</div>

      <h3>Tamil</h3>
      <div>Native</div>



    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;

  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>