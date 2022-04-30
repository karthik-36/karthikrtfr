import React, { Suspense, useRef, useState } from "react";
import { useEffect} from "react";
import { MeshReflectorMaterial } from "@react-three/drei";

import "./App.scss";

import { useGLTF, Effects } from "@react-three/drei";

import gsap from "gsap";



const TV = (prp) => {



  const tvRef = useRef(null);
    useEffect(() => {
        if (!!tvRef.current) {

 
            const timeline = gsap.timeline({ paused: true });

       
            timeline.to(tvRef.current.position, {
                y: 5.5,
                duration: 1,
                ease: "bounce.out"
            }, "<");

            // Play
            timeline.play();
        }
    }, [tvRef.current])




  //console.log(process.env.PUBLIC_URL + "/models/tv.gltf");
  const { nodes } = useGLTF("./tv.gltf");
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = prp.video;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <group  ref = {tvRef} scale={[1.2, 1.2, 1.2]} position={prp.position} rotation={prp.rotation}>
      <mesh geometry={nodes.TV.geometry}>
        <meshStandardMaterial color={prp.color} />
      </mesh>
      {
        <mesh position={[0, 0, 1.16]}>
          <boxGeometry args={[3.4, 2.1, 0.1]} />
          <meshBasicMaterial opacity={0.1} color={prp.color} />
          <MeshReflectorMaterial
             color={prp.color}
      
          />
        </mesh>

      }
      {

        <mesh position={[0, 0, 1.23]}>
          <boxGeometry args={[2.5, 1.1, 0.1]} />
          <meshBasicMaterial  color={prp.color} />
          <MeshReflectorMaterial
             color={prp.color}
          />
        </mesh>

      }
      <mesh rotation={[0, 3.14, 0]} position={[0, 0, 1.1]}>
        <planeGeometry args={[3.2, 1.9]} />
        <meshStandardMaterial emissive={"purple"} >
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};


export default TV;