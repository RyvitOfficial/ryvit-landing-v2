import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

const CAnimatedBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  const initThree = useCallback(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Particles
    const particleCount = 1500; // Increased particle count for denser, softer feel
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.015, // Slightly smaller particles
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.6, // Slightly reduced opacity
      sizeAttenuation: true,
    });

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() * 2 - 1) * 10; // x
      positions[i3 + 1] = (Math.random() * 2 - 1) * 10; // y
      positions[i3 + 2] = (Math.random() * 2 - 1) * 10; // z

      // Color variation from dark blue to light blue
      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.5 + Math.random() * 0.3); // HSL for blue shades
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Animation Loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      // Rotate particles
      particleSystem.rotation.x += 0.0003; // Slower rotation
      particleSystem.rotation.y += 0.0007; // Slower rotation

      // Move particles
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        particles.attributes.position.array[i3 + 2] += 0.008; // Slower movement along Z-axis
        if (particles.attributes.position.array[i3 + 2] > 5) {
          particles.attributes.position.array[i3 + 2] = -5; // Reset if out of view
        }
      }
      particles.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleMaterial.dispose();
      particles.dispose();
    };
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    initThree();
  }, [initThree]);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default CAnimatedBackground;
