import ProjectData from '@/data/ProjectData.ts'

export default [


    new ProjectData("project-8", "Car Physics & Destruction ","Arcade wheel physics and dynamic mesh deformation" ,"img/projects/thesis/image8.gif", `
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

           

            `, "#000000", true, true,"img/unitylogo.png",20,20),
    new ProjectData("project-7", "Opengl Mesh Loader","3d model importer using Assimp", "img/projects/opengl/monke.png", `
    <div class="paragraph">
      In this <strong>Opengl Mesh loader</strong> . I have created a simple mesh loader using opengl and c++ and assimp and managed to import the default blender monkey into the scene.This also has a simple dot lighting .
      <br/>
            </div>
            <div class="paragraph">
            <img class="pc-screenshot" src="img/projects/opengl/monke.png" alt="Opengl Mesh Loader Screenshot" />
                
            <div class="paragraph center">
              <a href="https://github.com/Harish-85/openglLearning" target="_blank"> Github Link</a>
          </div>


    `, "#000000", false, false,"img/openglLogo.png",40,30),
    new ProjectData("project-9", "Fluid Sim","Particle based fluid sim", "img/projects/fluidSim/fscover.png", `
    
        
        <div class="paragraph">
        <strong>Fluid Sim</strong> is a dam break simulation that I made to learn about fluid simulations. This uses a particle based approach and all the particles velocities are calculated via a compute shader.
        
        
        <div class="paragraph center">
        <video width="50%" height="50%" controls>
            <source src = "img/projects/fluidSim/fluid sim.mp4" type="video/mp4">
        </div>
    
       

          `), new ProjectData("project-10", "ASCII Renderer","A shader that converts the image into text" ,"img/projects/Ascii/img1.png", `
    
        
        <div class="paragraph">
        <strong>ASCII Renderer</strong> is a fully gpu based image effect that converts the image into ascii characters.
        
        <div class="paragraph">
            <img class="pc-screenshot" src="img/projects/Ascii/img1.png" alt="Ascii image screenshot" />
            <img class="pc-screenshot" src="img/projects/Ascii/img2.png" alt="Ascii image screenshot" />
                
            <div class="paragraph center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/l5-mJ66fJyw?si=42Wq-VSFQS96eMpu&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
        
      
       

          `),
];