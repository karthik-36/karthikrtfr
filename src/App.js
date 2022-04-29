import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import "./App.scss";


import left from "./images/left.png";
import right from "./images/right.png";
import KarthikShow from "./KarthikShow.js";




const App = () => {

  const [count, setCount] = useState(0);
  const [leftEnter, setLeftEnter] = useState(false);
  const [rightEnter, setRightEnter] = useState(false);

  const leftArrow = useRef();
  const rightArrow = useRef();


  const triggerScale = (direction, status) => {

    if (direction === "left") {
      setLeftEnter(status);
    }
    if (direction === "right") {
      setRightEnter(status);
    }

  }



  const arrowClick = (direction) => {
    if (direction === "left") {

      if (count === 0) {
        setCount(3);
      } else {
        setCount(count - 1);
      }

    } else {

      if (count === 3) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }
  }








  return (
    <>


      <Suspense fallback={null}>
        <Canvas camera={{ position: [2, 8, 7], rotation: [0.3, 0.3, 0.3] }}>

          <KarthikShow scene={count} />

        </Canvas>
      </Suspense>



      <div className="modal">
        <img className="left" onPointerEnter={() => triggerScale("left", true)} onPointerLeave={() => triggerScale("left", false)} src={left} ref={leftArrow} style={(leftEnter ? { backgroundColor: "rgba(199,255,255 , 0.3)", borderRadius: "50px" } : {})} onClick={() => arrowClick("left")} />
      

        {count === 0 ? "hey, try changing scenes by clicking on the left or right arrows."   : null}
        {count === 1 ? "Karthik swings"  : null}
        {count === 2 ? "Karthik goes bowling ": null}
        {count === 3 ? "Karthik plays beatsaber " : null}
        <img className="right" onPointerEnter={() => triggerScale("right", true)} onPointerLeave={() => triggerScale("right", false)} src={right} ref={rightArrow} style={(rightEnter ? { backgroundColor: "rgba(199,255,255,0.3)", borderRadius: "50px" } : {})} onClick={() => arrowClick("right")} />
      </div>


    </>
  );
};

export default App;