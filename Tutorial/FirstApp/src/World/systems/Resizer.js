
const setSize = (container , camera, renderer) =>{
    // set the camera aspect ratio
    camera.aspect = container.clientWidth / container.clientHeight;

    // update the camera's frustum
    camera.updateProjectionMatrix();

    // update the size of the renderer AND the canvas
    renderer.setSize(container.clientWidth, container.clientHeight);

    // set the pixel ratio(for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);

}   
class Resizer{
    constructor(container , camera, renderer){
        // set the initial size on load
        setSize(container , camera, renderer);

        // window.addEventListener("resize", ()=>{
        //     // set the size again if the resize occures
        //     setSize(container, camera, renderer);
        // })
    }
}

export {Resizer} ;