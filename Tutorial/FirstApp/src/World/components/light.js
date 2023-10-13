import { DirectionalLight, PointLight , RectAreaLight } from 'three';
function createLight(){
    // create a directional light
    const light = new DirectionalLight('white', 8);// color and intensity
    // default position of light and target is at (0, 0, 0)
    
    // move the light right, up and toward us
    // light will shine from (10, 10, 10) toward (0, 0, 0)
    light.position.set(10, 10, 10); //(x, y, z)
    
    return light;
}
export { createLight };