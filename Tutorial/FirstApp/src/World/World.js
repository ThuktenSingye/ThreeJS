import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createLight } from "./components/light";
import { createScene } from "./components/scene";
import { Resizer } from "./systems/Resizer";
import { createRenderer } from "./systems/renderer";

// below variables are module-scoped and cannot be accessed outside the module
let camera;
let renderer;
let scene;
let cube;
class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);

        // const origin = new Vector3();
        // console.log(origin.x, origin.y, origin.z);

        cube = createCube();
     
        const light = createLight();

        scene.add(cube, light);
        console.log(scene.children) // give children 
        const resizer = new Resizer(container, camera, renderer);
        // Bind the renderScene function to the class instance
        this.renderScene = this.renderScene.bind(this);
        
    }

    renderScene() {
        // draw a single frameset
        requestAnimationFrame(this.renderScene);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }
}

export { World };
