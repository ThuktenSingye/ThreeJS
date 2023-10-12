
import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createScene } from "./components/scene";
import { Resizer } from "./systems/Resizer";

import { createRenderer } from "./systems/renderer";

// below variable are module-scoped. cannot access outside the module
let camera;
let renderer;
let scene;

class World{
    constructor(container){
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);

        const cube = createCube();

        scene.add(cube);

        const resizer = new Resizer(container , camera, renderer);
    }
    render(){
        // draw a single frame
        renderer.render( scene, camera);
    }
}
export { World };