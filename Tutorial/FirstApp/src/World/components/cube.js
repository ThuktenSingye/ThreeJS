import { BoxGeometry , Mesh, MeshStandardMaterial , MeshBasicMaterial, Vector3, MathUtils} from 'three';


function createCube(){

    // create geometry 
    const geometry = new BoxGeometry(2, 2, 2);

    // switch to mesh standard material
    const material = new MeshStandardMaterial({color: 'orchid'});

    // create mesh containing the geometry and material
    const cube = new Mesh(geometry , material);
   


    return cube;
}

export { createCube };