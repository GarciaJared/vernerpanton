import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Panton3DModel() {
  const canvasRef = useRef();
  const modelRef = useRef(null);
  const [modelPosition, setModelPosition] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // 1:1 aspecto
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(400, 400); // tamaño fijo
    renderer.setClearColor(0xffffff, 0); // blanco transparente

    const ambient = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambient);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(
      "./imgs/panton.glb",
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;
        model.scale.set(20, 20, 20);
        model.position.set(-200, 50, -300); // ← Tu posición buena

        scene.add(model);
        camera.position.set(0, 0, 200);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableRotate = false; // desactiva órbita si no deseas rotación
        controls.target.set(0, 0, 0);
        controls.update();

        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          if (modelRef.current) {
            const { x, y, z } = modelRef.current.position;
            setModelPosition((prev) =>
              prev.x !== x || prev.y !== y || prev.z !== z ? { x, y, z } : prev
            );
          }
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (err) => console.error("Error al cargar modelo", err)
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
        padding: "0 5vw",
        backgroundColor: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      {/* Columna izquierda */}
      <div style={{ maxWidth: "200px", color: "#333" }}>
        <p style={{ margin: 0, fontSize: "1rem" }}>Verner</p>
        <h1 style={{ margin: 0, color: "#f44336", fontWeight: "bold", fontSize: "2rem" }}>
          PANTON
        </h1>
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", lineHeight: "1.4" }}>
          Experiencias llenas de color y texturas. Innovación y vibrante es el sello de mi trabajo
        </p>
      </div>

      {/* Modelo 3D */}
      <canvas
        ref={canvasRef}
        style={{
          width: "500px",
          height: "500px",
        }}
      />

      {/* Columna derecha */}
      <div style={{ maxWidth: "280px", color: "#600" }}>
        <p style={{ fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
          En un mundo dominado por lo lineal y lo predecible, decidí romper las reglas. <br /><br />
          ¿Qué sentiría el mundo si pudiera vivir dentro del color? <br /><br />
          <strong>Colores audaces.</strong> <br />
          <strong>Formas orgánicas.</strong> <br />
          Texturas que invitan al tacto y a la emoción.
        </p>
      </div>
    </div>
  );
}

export default Panton3DModel;
