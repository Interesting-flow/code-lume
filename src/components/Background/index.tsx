import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const CyberBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    // 霓虹网格设置
    const gridHelper = new THREE.GridHelper(40, 40, 0x4f46e5, 0x4f46e5);
    (gridHelper.material as THREE.Material).opacity = 0.2;
    (gridHelper.material as THREE.Material).transparent = true;
    scene.add(gridHelper);

    // 动态流光效果
    const lightTrailGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array([...Array(500)].flatMap(() => [
      Math.random() * 40 - 20,
      Math.random() * 40 - 20,
      Math.random() * 40 - 20
    ]));
    lightTrailGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const lightTrailMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x8b5cf6,
      blending: THREE.AdditiveBlending
    });
    
    const lightTrail = new THREE.Points(lightTrailGeometry, lightTrailMaterial);
    scene.add(lightTrail);

    camera.position.z = 30;
    
    const animate = () => {
      requestAnimationFrame(animate);
      lightTrail.rotation.x += 0.002;
      lightTrail.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);
    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default CyberBackground;