import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const PuzzleComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let puzzlePieces = [];

    const init = () => {
      // Scene
      scene = new THREE.Scene();
      
      // Camera
      camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 5;

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(250, 250);
      containerRef.current.appendChild(renderer.domElement);

      // Puzzle Pieces
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      for (let i = 0; i < 4; i++) {
        const piece = new THREE.Mesh(geometry, material);
        piece.position.x = (i % 2) * 2 - 1; // Alternating positions
        piece.position.y = Math.floor(i / 2) * 2 - 1;
        puzzlePieces.push(piece);
        scene.add(piece);
      }

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);

        puzzlePieces.forEach((piece, index) => {
          piece.rotation.x += 0.01;
          piece.rotation.y += 0.01;
        });

        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    // Clean up Three.js objects on component unmount
    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default PuzzleComponent;
