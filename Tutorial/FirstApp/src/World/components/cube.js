import { BoxGeometry , Mesh, MeshBasicMaterial } from 'three';

function createCube(){

    // create geometry 
    const geometry = new BoxGeometry(2, 2, 2);
    
    // create material default white
    const material = new MeshBasicMaterial();

    // create mesh containing the geometry and material
    const cube = new Mesh(geometry , material);

    return cube;
}

export { createCube };