import React, { Suspense, useRef, useState } from "react";
import "./App.scss";
import { Ground } from "./Ground";
import bowl from "./videos/bowl.mp4";

import TV from "./TV.js";
import BowlFloor from "./Bowlfloor";
import BowlFinal from "./BowlFinal";
import { extend } from "@react-three/fiber";
import fonts from "./fonts";
import { Text } from "troika-three-text";

extend({ Text });
const text =
    '"Karthik Why cant you bowl like normal people !?" \nYes, I am guilty of bowling into other people\'s lane.\nSometimes winning is not important.\nthe pleasure of watching the bowl fly through air\ntakes precedence. ';

function Scene2(props) {

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

        {/* <ambientLight
            color={[1, 1, 1]}
            intensity={12.5}
      
        /> */}

        <pointLight
            color={[0.6, 0.6, 1]}
            intensity={3.5}
            angle={1}
            penumbra={0.5}
            position={[-4, 5, -4]}
            castShadow
            shadow-bias={-0.0001}
        />

        <pointLight
            color={[0.6, 0.6, 1]}
            intensity={2.5}
            angle={1}
            penumbra={0.5}
            position={[2, 5, 2]}
            castShadow
            shadow-bias={-0.0001}
        />

        <TV video={bowl} position={[0, 10.5, 0]} rotation={[Math.PI * 0.1, Math.PI * 1.2, Math.PI * 0.05]} color={"purple"} />
        {/* <KeeperBowl /> */}

        <text
            position-z={-10}
            rotation={[0, -0.4, 0]}
            position={[7, 4, -5]}
            {...opts}
            text={text}
            scale={0.04}
            font={fonts[opts.font]}
            anchorX="center"
            anchorY="middle"
        >
            {opts.materialType === "MeshPhongMaterial" ? (
                <meshPhongMaterial attach="material" color={opts.color} />
            ) : null}
        </text>
        <BowlFinal />
        <BowlFloor />
        <Ground groundTexture="wood.jpg" />
    </>);
}

export default Scene2;



