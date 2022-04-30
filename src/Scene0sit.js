

import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import "./App.scss";
import { Ground } from "./Ground";

import fire from "./videos/fire.mp4";

import Firea from "./Firea";
import TV from "./TV.js"
import Table from "./Table.js";
import Chair from "./Chair.js"
import blender from "./images/computer.JPG";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import fonts from "./fonts";
import { extend } from "@react-three/fiber";
import { Text } from "troika-three-text";


extend({ Text });
const text =
    "Welcome to Karthik's\n        Slice of Life\n\nHold left click to orbit. \nRight click to pan. \nScroll to zoom.";

function Scene0(props) {


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


    const [
        colorMap,
    ] = useLoader(TextureLoader, [
        blender
    ]);



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



        <text
            position-z={-10}
            rotation={[0, -0.4, 0]}
            position={[7, 4, -4]}
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

        <TV video={fire} position={[0, 10.5, 0]} scale={[0.5, 0.1, 0.5]} rotation={[Math.PI * 0.1, Math.PI * 1.2, Math.PI * 0.05]} color={"darkblue"} />

        <Firea />
        <Chair />



        <mesh position={[1.161, 2.02, 0.96]} rotation={[0, -0.88, 0]}>

            <boxBufferGeometry args={[0.01, 0.70, 1.59]} />
            <meshStandardMaterial

                displacementScale={0.2}
                map={colorMap}

            />
        </mesh>
        <Table />
        <Ground groundTexture="terrain-roughness.jpg" />
    </>);
}

export default Scene0;


