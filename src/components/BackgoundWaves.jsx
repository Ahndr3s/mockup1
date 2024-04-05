import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const WaveBackground = () => {
  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();

  useEffect(() => {
    let scene, camera, renderer;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
      const material = new THREE.MeshBasicMaterial({ color: 0x0044ff, wireframe: true });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      camera.position.z = 1000;

      sceneRef.current = scene;
      cameraRef.current = camera;
      rendererRef.current = renderer;

      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Actualiza el estado de la animación aquí
      // Por ejemplo, puedes rotar el plano para simular olas

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    init();

    return () => {
      // Limpia los recursos en el momento de la salida
      rendererRef.current.dispose();
      sceneRef.current.remove(...sceneRef.current.children);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default WaveBackground;
