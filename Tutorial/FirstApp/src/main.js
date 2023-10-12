import { World  } from "./World/World.js";

// create the main function
function main(){
  // code to set up the world App will go here
  
  // get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create an instance of the world app
  const world = new World(container);

  // render the scene
  world.render()
 
  
}
// call the main to start the app
main()