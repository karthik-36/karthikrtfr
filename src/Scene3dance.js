import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { softShadows, MeshWobbleMaterial, OrbitControls, Box, RoundedBox } from '@react-three/drei';
import "./App.scss";
import { BoxBufferGeometry, DoubleSide } from "three";
import { useSpring, a } from '@react-spring/three';
import { Ground } from "./Ground";
import * as THREE from "three";
import beat from "./videos/beat.mp4";
import ghost from "./videos/ghostcut.mp4";
import Dancebeat from "./Dancebeat.js";
import TV from "./TV.js";
import gsap from "gsap";
import { extend } from "@react-three/fiber";
import fonts from "./fonts";
import { Text } from "troika-three-text";


extend({ Text });
const text =
    "I have more than 10 games on my oculus.\nBut 90% of the time you will \nfind me playing Beat Saber.";



function Scene3(props) {


    const [rotation, setRotation] = useState([0, 0, 0, 0]);
    const [opts, setOpts] = useState({
        font: "Philosopher",
        fontSize: 12,
        color: "#99ccff",
        maxWidth: 300,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "justify",
        materialType: "MeshPhongMaterial"
    });



    const VideoBeat = (prp) => {

        //console.log(process.env.PUBLIC_URL + "/models/tv.gltf");

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
            <group scale={[1.2, 1.2, 1.2]} position={prp.position} rotation={prp.rotation}>
                <mesh rotation={[0.2, 3.14, 0]} position={[0, 0.2, 1.1]}>
                    <planeGeometry args={[3.4, 2.5]} />
                    <meshStandardMaterial emissive={"purple"} side={THREE.DoubleSide}>
                        <videoTexture attach="map" args={[video]} />
                        <videoTexture attach="emissiveMap" args={[video]} />
                    </meshStandardMaterial>
                </mesh>
            </group>
        );
    };


    const redCubeRef = useRef(null);
    const blueCubeRef = useRef(null);

    const redCubeRef2 = useRef(null);
    const blueCubeRef2 = useRef(null);

    useEffect(() => {
        if (!!redCubeRef.current) {

            // Timeline
            const timeline = gsap.timeline({ paused: true });

            timeline.to(redCubeRef.current.position, {
                x: 3,
                duration: 1.2,
                ease: "none",
                repeat: -1
            });

            timeline.to(redCubeRef.current.position, {
                z: 1,
                duration: 1.2,
                ease: "none",
                repeat: -1
            }, "<");


            timeline.to(blueCubeRef.current.position, {
                x: 0,
                duration: 1.2,
                ease: "none",
                repeat: -1
            }, "<");

            timeline.to(blueCubeRef.current.position, {
                z: 0,
                duration: 1.2,
                ease: "none",
                repeat: -1
            }, "<");







            timeline.to(redCubeRef2.current.position, {
                x: 3,
                duration: 1.4,
                ease: "none",
                repeat: -1
            }, "<");

            timeline.to(redCubeRef2.current.position, {
                z: 1,
                duration: 1.4,
                ease: "none",
                repeat: -1
            }, "<");


            timeline.to(blueCubeRef2.current.position, {
                x: 0,
                duration: 1.4,
                ease: "none",
                repeat: -1
            }, "<");

            timeline.to(blueCubeRef2.current.position, {
                z: 0,
                duration: 1.4,
                ease: "none",
                repeat: -1
            }, "<");







            timeline.play();
        }
    }, [redCubeRef.current])

    return (<>

        <color args={[0, 0, 0]} attach="background" />
        {/* [1, 0.25 , 0.7] */}
        <pointLight
            color={[0.6, 0.6, 1]}
            intensity={2.5}
            angle={1}
            penumbra={0.5}
            position={[-4, 5, -4]}
            castShadow
            shadow-bias={-0.0001}
        />

        <pointLight
            color={[0.6, 0.6, 1]}
            intensity={1.5}
            angle={1}
            penumbra={0.5}
            position={[2, 5, 2]}
            castShadow
            shadow-bias={-0.0001}
        />


        <RoundedBox ref={redCubeRef} position={[11, 1, 9]} rotation={[0, 0.7, 0]} scale={[0.7, 0.7, 0.7]} radius={0.2}>
            <meshLambertMaterial attach="material" color={"red"} />
        </RoundedBox>

        <RoundedBox ref={blueCubeRef} position={[10, 2, 10]} rotation={[0, 0.7, 0]} scale={[0.7, 0.7, 0.7]} radius={0.2}>
            <meshLambertMaterial attach="material" color={"blue"} />
        </RoundedBox>


        <RoundedBox ref={redCubeRef2} position={[13, 2, 11]} rotation={[0, 0.7, 0]} scale={[0.7, 0.7, 0.7]} radius={0.2}>
            <meshLambertMaterial attach="material" color={"red"} />
        </RoundedBox>

        <RoundedBox ref={blueCubeRef2} position={[12, 1, 12]} rotation={[0, 0.7, 0]} scale={[0.7, 0.7, 0.7]} radius={0.2}>
            <meshLambertMaterial attach="material" color={"blue"} />
        </RoundedBox>

 

        <TV video={beat} position={[1.1, 10.5, 0]} rotation={[Math.PI * 0.1, Math.PI * 1.2, Math.PI * 0.05]} color={"blue"} />
        <VideoBeat video={ghost} position={[0.5, 1.5, -1.0]} rotation={[Math.PI * 0.1, Math.PI * 1.2, Math.PI * 0.06]} color={"blue"} />

        <text
            position-z={-10}
            rotation={[0, -0.3, 0]}
            position={[8, 4, -4.5]}
            {...opts}
            text={text}
            scale={0.05}
            font={fonts[opts.font]}
            anchorX="center"
            anchorY="middle"
        >
            {opts.materialType === "MeshPhongMaterial" ? (
                <meshPhongMaterial attach="material" color={opts.color} />
            ) : null}
        </text>

        <Dancebeat />
        <Ground groundTexture="carpet.jpg" />
    </>);
}

export default Scene3;


