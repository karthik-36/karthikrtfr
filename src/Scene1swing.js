import React, {  useState } from "react";
import "./App.scss";
import { Ground } from "./Ground";
import swing from "./videos/swing.mp4";
import SwingReverseDelay from "./SwingReverseDelay.js";
import TV from "./TV.js"
import RedSwing from "./Redbar2"
import { extend } from "@react-three/fiber";
import fonts from "./fonts";
import { Text } from "troika-three-text";


extend({ Text });
const text =
    "I Swing a lot.\nI like doing pull ups too(15 max).\nI like hanging in general.";

function Scene1(props) {


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



    return (<>
        <color args={[0, 0, 0]} attach="background" />
        {/* [1, 0.25 , 0.7] */}

        <ambientLight intensity={0.5} color="white" />
        <pointLight
            color={[1, 0.6, 0.6]}
            intensity={1.5}
            angle={1}
            penumbra={0.5}
            position={[-4, 5, -4]}
            castShadow
            shadow-bias={-0.0001}
        />

        <pointLight
            color={[1, 0.6, 0.6]}
            intensity={1.0}
            angle={1}
            penumbra={0.5}
            position={[2, 5, 2]}
            castShadow
            shadow-bias={-0.0001}
        />

        <TV video={swing} position={[0, 10.5, 0]} rotation={[Math.PI * 0.1, Math.PI * 1.2, Math.PI * 0.05]} color={"red"} />
        <SwingReverseDelay />
        <text
            position-z={-10}
            rotation={[0, -0.5, 0]}
            position={[6, 4, -6]}
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
        <RedSwing />
        <Ground groundTexture="metal.jpg" />
    </>);
}

export default Scene1;

