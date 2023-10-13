import { Clock } from "three";
const clock = new Clock();
class Loop{
    constructor(camera, scene, renderer){
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = []; // store the list of animated object
    }
    start(){
        this.renderer.setAnimationLoop(()=>{
            //setAnimationLoop will render frame over and over again

            // tell every animated object to tick forward one frame
            this.tick(); // 
            this.renderer.render(this.scene, this.camera);
        })
    }
    stop(){
        // stopping the animation
        this.renderer.setAnimationLoop(null); 
    }
    tick(){
        // call the geDelta function once per frame
        const delta = clock.getDelta()
        // code to update animation will go here 
        for(const object of this.updatables){
            object.tick(delta);
        }
    }
}

export {Loop};