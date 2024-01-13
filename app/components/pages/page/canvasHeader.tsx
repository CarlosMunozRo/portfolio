'use client'

import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three-stdlib';
import { useEffect, Suspense } from 'react';
import * as THREE from 'three';
import { easing } from 'maath'


var fbx = null;
function Model() {
    fbx = useLoader(FBXLoader, '/models/personality_sphere_model.fbx');
  
    return <primitive object={fbx} scale={0.1} />;
}

function Scene() {
    const { camera, gl: { domElement }, set, size } = useThree();

    useFrame((state, dt) => {
        // state.camera.updateProjectionMatrix();
        // state.gl.render(state.scene, state.camera);
        if (!fbx) return;
        fbx.lookAt(state.pointer.x, state.pointer.y, 1)
    });

    useEffect(() => {
        set({ antialias: true, alpha: true });
        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();
    }, [camera, set, size]);

    return (
        <>
            <ambientLight args={[0xffffff, 0.5]} />
            <OrbitControls enableDamping />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </>
    );
}

export default function CanvasHeader() {
    return (
        <Canvas camera={{ position: [0, 0.1, 3] }}>
            <ambientLight />
            <directionalLight position={[10, 10, 10]} />
            <Scene />
        </Canvas>
    );
}