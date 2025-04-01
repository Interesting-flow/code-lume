'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

export default function Background() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
        setMousePos({
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1
        });
    };

    const GradientBackground = () => {
        useFrame(({ clock, camera }) => {
            if (meshRef.current) {
                meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
                meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;

                // 霓虹光效边框
                meshRef.current.material.uniforms.time.value = clock.getElapsedTime();
                meshRef.current.material.uniforms.mousePos.value.set(mousePos.x, mousePos.y);

                // CRT屏幕噪点效果
                camera.layers.enable(1);
            }
        });

        return (
            <mesh ref={meshRef}>
                <planeGeometry args={[12, 10]} />                
                {/* <planeGeometry args={[window.innerWidth, window.innerHeight]} /> */}

                <shaderMaterial
                    uniforms={{
                        time: { value: 0 },
                        mousePos: { value: new THREE.Vector2(0, 0) },
                        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
                    }}
                    vertexShader={`
                        varying vec2 vUv;
                        void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                        }
                    `}
                    fragmentShader={`
                        uniform float time;
                        uniform vec2 mousePos;
                        uniform vec2 resolution;
                        varying vec2 vUv;
                        
                        void main() {
                        vec2 uv = vUv;
                        
                        // 流动渐变背景
                        // 科技感更强的渐变背景
                        vec3 color1 = vec3(0.0, 0.8, 0.9);
                        vec3 color2 = vec3(0.9, 0.0, 0.8);
                        vec3 color = mix(color1, color2, uv.x + sin(time * 2.0 + uv.y * 10.0) * 0.3);
                        
                        // 增强的鼠标跟随效果
                        vec2 mouse = mousePos * 0.5 + 0.5;
                        float dist = distance(uv, mouse);
                        color += vec3(0.5, 1.0, 1.0) * exp(-dist * 5.0) * 2.0;
                        
                        // 添加扫描线效果
                        float scanline = sin(uv.y * resolution.y * 1.5 + time * 5.0);
                        color *= 0.9 + 0.1 * scanline;
                        
                        gl_FragColor = vec4(color, 1.0);
                        }
                    `}
                />
            </mesh>
        );
    };

    return (
        <div className="fixed inset-0 -z-10" onMouseMove={(e) => handleMouseMove(e as unknown as MouseEvent)}>
            <Canvas onCreated={({ gl }) => {
                gl.setPixelRatio(window.devicePixelRatio);
                gl.setSize(window.innerWidth, window.innerHeight);
            }}>
                <GradientBackground />

                {/* 全息投影卡片 */}
                {/* <Card /> */}
                <GradientBackground />
            </Canvas>
        </div>
    );
}

export const Card = () => {
    return (
        <group position={[0, 0, -1]}>
            <mesh layers={1}>
                <planeGeometry args={[3, 2]} />
                <shaderMaterial
                    uniforms={{
                        time: { value: 0 },
                        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
                    }}
                    transparent={true}
                    vertexShader={`
                                varying vec2 vUv;
                                void main() {
                                vUv = uv;
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                                }
                            `}
                    fragmentShader={`
                                uniform float time;
                                uniform vec2 resolution;
                                varying vec2 vUv;
                                
                                void main() {
                                // 增强的全息投影效果
                                vec3 color = vec3(0.0, 1.0, 0.8);
                                float alpha = 0.6 + 0.4 * sin(time * 3.0 + vUv.x * 15.0);
                                
                                // 网格效果
                                float grid = max(
                                    step(0.98, fract(vUv.x * 20.0 + time * 0.5)),
                                    step(0.98, fract(vUv.y * 20.0 + time * 0.3))
                                ) * 0.3;
                                
                                // 增强的CRT噪点效果
                                float noise = fract(sin(dot(vUv, vec2(12.9898,78.233))) * 43758.5453);
                                noise = pow(noise, 5.0) * 0.2;
                                
                                gl_FragColor = vec4(color + noise, alpha);
                                }
                            `}
                />
            </mesh>
        </group>
    )
}