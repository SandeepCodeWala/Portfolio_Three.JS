import React, { useEffect, useRef } from "react";

import birdScene from "../assets/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Clock } from "three";
function Bird() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    if (!birdRef.current) return; // Prevents crashes
  
    birdRef.current.rotation.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
  
    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }
  
    if (birdRef.current.rotation.x === 0) {
      birdRef.current.position.x += 0.005;
      birdRef.current.position.z -= 0.005;
    } else {
      birdRef.current.position.x -= 0.005;
      birdRef.current.position.z += 0.005;
    }
  });
  

  return (
    <mesh ref={birdRef} position={[-4, 2, 1]}>
      <primitive scale={0.002} object={scene} />
    </mesh>
  );
}

export default Bird;
