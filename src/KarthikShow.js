
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { softShadows, MeshWobbleMaterial, OrbitControls, Box } from '@react-three/drei';
import "./App.scss";

import Scene0 from "./Scene0sit";
import Scene1 from "./Scene1swing";
import Scene2 from "./Scene2bowl";
import Scene3 from "./Scene3dance";



function KarthikShow(props) {


  const orbitControlsRef = useRef(null);
  const camera1 = useRef(null);
//   // camera1.position.setX(1)
//     // console.log(camera1.current.setX(1));
//   // OrbitControlsRef..

//    useEffect((state) => {
//     // console.log(camera1.current.position.setY(10)) 
//     // console.log(OrbitControlsRef.position = [0,5,0]);
  
//   },[camera1])
 
//   function setCam () {
//   useFrame((state) => {

//     state.camera.position.y = 10;
//     state.camera.updateProjectionMatrix()
    
//   })
//   return null;
// };
  return (<>
    <ambientLight intensity={0.1} />

    {/* <perspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControlsRef} maxPolarAngle={1.40} /> */}

    <perspectiveCamera makeDefault ref = {camera1} position = {[0,0,0]}  />
    <OrbitControls  args={[0, 10, 6]} ref={orbitControlsRef} maxPolarAngle={1.40} />

    {props.scene === 0 ? < Scene0 /> : null}
    {props.scene === 1 ? < Scene1 /> : null}
    {props.scene === 2 ? < Scene2 /> : null}
    {props.scene === 3 ? < Scene3 /> : null}

    {/* <gridHelper /> */}
  </>
  )

}


export default KarthikShow;
