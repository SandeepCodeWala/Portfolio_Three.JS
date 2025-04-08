import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { Model } from "../components/Island";
import Sky from "../components/sky";
import Plane from "../components/Plane";
import Bird from "../components/Bird";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import soundoff from "../assets/icons/soundoff.png";
import soundon from "../assets/icons/soundon.png";

function Home() {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [isplaying, setIsPlaying] = useState(false);
  const [modelRotation, setModelRotation] = useState([0.1, 4.7, 0]);
  const lastYRef = useRef(null);
  useEffect(() => {
    if (isplaying) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isplaying]);

  const adjustScreenSize = () => {
    let screenPosition = [10, -11.5, -48];
    let screenScale = null;
    let rotation = [0.1, 2.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const handleMouseDown = (e) => {
    setIsRotating(true);
    lastYRef.current = e.clientY;
  };

  const handleMouseUp = () => {
    setIsRotating(false);
    lastYRef.current = null;
  };

  const handleMouseMove = (e) => {
    if (isRotating && lastYRef.current !== null) {
      const deltaY = e.clientY - lastYRef.current;
      const rotationAmount = deltaY * 0.005; // Adjust sensitivity

      setModelRotation((prevRotation) => [
        prevRotation[0] + rotationAmount, // Rotate on X-axis (up/down)
        prevRotation[1],
        prevRotation[2],
      ]);

      lastYRef.current = e.clientY;
    }
  };

  const adjustPlaneScreenSize = () => {
    let screenPosition, screenScale;
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition, rotation];
  };
  const [planeScale, planePosition] = adjustPlaneScreenSize();

  const [islandScale, islandPosition, rotation] = adjustScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={` h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <Suspense fallback={<Loader />}></Suspense>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <hemisphereLight
          skyColor={"#b1e1ff"}
          groundColor={"#000"}
          intensity={1}
        />
        <Bird />
        <Sky isRotating={isRotating} />

        <Model
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          position={islandPosition}
          scale={islandScale}
          rotation={modelRotation} // updated rotation
          setCurrentStage={setCurrentStage} // Pass setCurrentStage
        />

        {/* <Plane
          isRotating={isRotating}
          rotation={[0, 20, 0]}
          planePosition={planePosition}
          planeScale={planeScale}
        /> */}
      </Canvas>
      {/* {currentStage !== null && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold">Stage {currentStage}</h2>
            <p>You've reached Stage {currentStage}. Perform an action here.</p>
            <button onClick={() => setCurrentStage(null)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )} */}
      <div className="absolute bottom-2 left-2">
        <img
          src={isplaying ? soundon : soundoff}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlaying(!isplaying)}
        />
      </div>
    </section>
  );
}

export default Home;
