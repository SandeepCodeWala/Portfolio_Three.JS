import React, { useEffect, useRef, useState } from "react";
import birdScene from "../assets/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Bird() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);
  const [direction, setDirection] = useState(1); // 1 for left to right, -1 for right to left

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ camera }) => {
    if (!birdRef.current) return;

    // Set rotation based on direction
    birdRef.current.rotation.y = direction === 1 ? 0 : Math.PI;

    // Move the bird in the correct direction
    birdRef.current.position.x += 0.005 * direction;
    birdRef.current.position.z -= 0.005 * direction;

    // Check if it needs to turn around
    if (birdRef.current.position.x > camera.position.x + 10) {
      setDirection(-1);
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      setDirection(1);
    }
  });

  return (
    <mesh ref={birdRef} position={[-4, 2, 1]}>
      <primitive scale={0.002} object={scene} />
    </mesh>
  );
}

export default Bird;
