import { BoxGeometry , Mesh, MeshStandardMaterial , MeshBasicMaterial, Vector3, MathUtils} from 'three';


function createCube(){

    // create geometry 
    const geometry = new BoxGeometry(2, 2, 2);

    // switch to mesh standard material
    const material = new MeshStandardMaterial({color: 'orchid'});

    // create mesh containing the geometry and material
    const cube = new Mesh(geometry , material);
    cube.scale.set(1, 1, 1);
    // cube.position.set(2, 0, 0)
    // cube.rotation.set(2,0 ,0);
    // cube.rotation.set(-0.5, -0.1, 0.8);

    return cube;
}
function createCube2(){
     // create geometry 
     const geometry = new BoxGeometry(1, 1, 1);

     // switch to mesh standard material
     const material = new MeshStandardMaterial({color: 'red'});
 
     // create mesh containing the geometry and material
     const cube = new Mesh(geometry , material);
     cube.position.set(2, 0, 0);
    //  cube.rotation.set(2, 0, 0)

     cube.scale.set(3, 3, 3);
    //  cube.rotation.set(-0.5, -0.1, 0.8);
 
     return cube;
}

export { createCube , createCube2};