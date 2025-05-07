import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Panton3DModel() {
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x202020);

        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        const loader = new GLTFLoader();
        let model;

        loader.load('./imgs/panton.glb', (gltf) => {
            model = gltf.scene;
            model.position.set(0, 0, 0);
            model.scale.set(20, 20, 20);
            scene.add(model);

            camera.position.set(0, 0, 20);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
            directionalLight.position.set(10, 10, 10);
            scene.add(directionalLight);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;

            const animate = () => {
                requestAnimationFrame(animate);
                if (model) {
                    model.rotation.y += 0.01;
                }
                controls.update();
                renderer.render(scene, camera);
            };

            animate();
        }, undefined, (error) => {
            console.error("Error loading model:", error);
        });

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <section className="three-d-model">
            <canvas ref={canvasRef}></canvas>
        </section>
    );
}

export default Panton3DModel;
