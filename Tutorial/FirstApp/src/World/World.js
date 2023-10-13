import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createLight } from "./components/light";
import { createScene } from "./components/scene";
import { Resizer } from "./systems/Resizer";
import { createRenderer } from "./systems/renderer";
import { Loop } from "./systems/loop";

// below variables are module-scoped and cannot be accessed outside the module
let camera;
let renderer;
let scene;
let cube;
let loop;
class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene , renderer);
        container.append(renderer.domElement);

     
        cube = createCube();
        const light = createLight();

        loop.updatables.push(cube);
        scene.add(cube, light);
    
        const resizer = new Resizer(container, camera, renderer);
        
    }

    renderScene() {
        //  draw a single frameset
        renderer.render(scene, camera);
    }
    start(){
        loop.start();
    }
    stop(){
        loop.stop();
    }
}

export { World };
