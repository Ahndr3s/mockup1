import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, particles, particleSystem;

    const init = () => {
      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 100;

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      containerRef.current.appendChild(renderer.domElement);

      // Particles
      const particleCount = 1000;
      const particlesGeometry = new THREE.BufferGeometry();
      const particleVertices = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        const z = Math.random() * 200 - 100;
        particleVertices.push(x, y, z);
      }
      particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particleVertices, 3));
      const particleMaterial = new THREE.PointsMaterial({ color: 0xd8b7e9 });
      particleSystem = new THREE.Points(particlesGeometry, particleMaterial);
      scene.add(particleSystem);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        particleSystem.rotation.y += 0.001;
        renderer.render(scene, camera);
      };

      animate();

      // Event listener for window resize
      window.addEventListener('resize', onWindowResize, false);

      return () => {
        window.removeEventListener('resize', onWindowResize);
        containerRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      };
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    init();

  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticleBackground;
