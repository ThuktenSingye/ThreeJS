import { BoxGeometry , Mesh, MeshStandardMaterial , MeshBasicMaterial, Vector3, MathUtils} from 'three';
import { randFloat } from 'three/src/math/MathUtils';


function createCube(){

    // create geometry 
    const geometry = new BoxGeometry(2, 2, 2);

    // switch to mesh standard material
    const material = new MeshStandardMaterial({color: 'orchid'});

    // create mesh containing the geometry and material
    const cube = new Mesh(geometry , material);
    
    // the cube will rotate 30 second per second and will play at same speed no matter where itrun
    const radianPerSecond = MathUtils.degToRad(30);

    cube.tick = (delta) =>{
        // increase the cube rotation each frame
        cube.rotation.z += radianPerSecond * 0.01;
        cube.rotation.x += radianPerSecond * 0.01;
        cube.rotation.y += radianPerSecond * 0.01;
    };


    return cube;
}

export { createCube };