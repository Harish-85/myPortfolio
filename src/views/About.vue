<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Harish N</strong>, a Game developer with expertise in Unity C# Programming, Shaders, and Realtime VFX.<br/>
        I have been working in game development for the past 4 years and have worked on multiple projects in the past.
      </div>

      <div style="margin-top: 20px;">I've worked on several  <router-link to="/game-projects">games </router-link> and <RouterLink to="/other-projects"> mini projects </RouterLink></div>


    </div>

    <div class="photo">
      <img src="img/portfolioimg.png" alt="Photo of Harish" />
    </div>

    <div style="clear:both"></div>

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