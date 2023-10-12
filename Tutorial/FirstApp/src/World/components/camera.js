import { ColorManagement, PerspectiveCamera} from 'three';

function createCamera(){
    const camera = new PerspectiveCamera(
        35, // field of view
        1, // aspect ratio
        0.1, // near clipping pane
        100); // far clipping pane

    // set camera position back
    camera.position.set(0, 0, 10);

    return camera;
}

    export { createCamera };