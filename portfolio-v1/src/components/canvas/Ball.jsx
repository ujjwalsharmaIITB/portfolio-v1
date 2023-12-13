import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.5]} intensity={0.5} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal
          map={decal}
          position={[0, 0, 0.5]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      // camera is important to view the 3d objects
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* suspense is a to show a loader */}
      <Suspense fallback={<CanvasLoader />}>
        {/* to pass in the controls */}
        <OrbitControls enableZoom={false} />

        <Ball imgUrl={icon} />
        {/* This is within this suspence */}

        {/* add preload */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
