import ProjectData from '@/data/ProjectData.ts'

export default [

    new ProjectData("project-7", "Opengl Mesh Loader", "img/projects/opengl/monke.png", `
    <div class="paragraph">
      In this <strong>Opengl Mesh loader</strong> . I have created a simple mesh loader using opengl and c++ and assimp and managed to import the default blender monkey into the scene.This also has a simple dot lighting .
      <br/>
            </div>
            <div class="paragraph">
            <img class="pc-screenshot" src="img/projects/opengl/monke.png" alt="Opengl Mesh Loader Screenshot" />
                
            <div class="paragraph center">
              <a href="https://github.com/Harish-85/openglLearning" target="_blank"> Github Link</a>
          </div>


    `, "#000000", false, false),
    new ProjectData("project-8", "Car Physics & Destruction ", "img/projects/thesis/image8.gif", `
    <div class="paragraph">
                This is a thesis I wrote on how to make a realtime car destruction system in unity using JOBS system.
                The car physics system that is used is also a custom wheel collider system that I have created.
            </div>

            <div class="notice">
              <a href="https://github.com/Harish-85/Realtime-Car-Destruction-Unity/blob/main/Thesis%20with%20jobs.pdf" target="_blank"> Thesis Link</a><br>
              Source code available on <a href="https://github.com/Harish-85/Realtime-Car-Destruction-Unity" target="_blank">GitHub</a>.
          </div>
            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/thesis/image8.gif" alt="Car destruction demonstration" />
                
            </div>
          <div class="paragraph">
          Main features :
          <ul>
          <li>Custom Arcade style wheel physics</li>
          <li>Realtime multithreaded mesh deformation</li>
          <li>Breakable car parts</li>
          
          </ul>
      </div>

           

            `),
    new ProjectData("project-9", "Fluid Sim", "img/projects/fluidSim/fscover.png", `
    
        
        <div class="paragraph">
        <strong>Fluid Sim</strong> is a dam break simulation that I made to learn about fluid simulations. This uses a particle based approach and all the particles velocities are calculated via a compute shaderdiv>
        
        
        <div class="paragraph center">
        <video width="50%" height="50%" controls>
            <source src = "img/projects/fluidSim/fluid sim.mp4" type="video/mp4">
        </div>
    
       

          `),
];