import React, { Suspense, useEffect, useState } from "react";

// empty canvas
import { Canvas } from "@react-three/fiber";
// helpers to create 3d objects on empty canvas
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// useGLTF is used to load 3d objects
// OrbitControls is used to rotate the canvas
// Preload is used to preload the 3d objects

import CanvasLoader from "../Loader";

const Computers = () => {
  // import 3d objects
  console.log("loading computer ... ");
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* create a light to illiminate the 3D model */}
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight intensity={2} position={[0, 3, 0]} />
      {/* <spotLight
        position={[20, 50, 0]}
        angle={0.3}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, 0, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      // camera is important to view the 3d objects
      camera={{
        position: [20, 10, 10],
        fov: 25,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* suspense is a to show a loader */}
      <Suspense fallback={<CanvasLoader />}>
        {/* to pass in the controls */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers />
        {/* This is within this suspence */}

        {/* add preload */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
