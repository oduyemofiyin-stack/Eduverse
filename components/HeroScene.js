'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function MouseTracker({ children }) {
  const group = useRef();
  const { pointer } = useThree();
  useFrame(() => {
    if (group.current) {
      group.current.rotation.x = pointer.y * 0.15;
      group.current.rotation.y = pointer.x * 0.25;
    }
  });
  return <group ref={group}>{children}</group>;
}

function Globe() {
  const mesh = useRef();
  const wireframe = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(t * 0.15) * 0.08;
      mesh.current.rotation.y = t * 0.08;
    }
    if (wireframe.current) {
      wireframe.current.rotation.x = Math.sin(t * 0.12 + 1) * 0.1;
      wireframe.current.rotation.y = t * 0.06 + 0.5;
    }
  });
  return (
    <group>
      <mesh ref={wireframe}>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshBasicMaterial color="#4488ff" wireframe transparent opacity={0.12} />
      </mesh>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[2, 1]} />
        <MeshDistortMaterial
          color="#1a3a6a"
          emissive="#3366cc"
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
          distort={0.08}
          speed={0.6}
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[2.05, 1]} />
        <meshBasicMaterial color="#4488ff" transparent opacity={0.03} wireframe />
      </mesh>
    </group>
  );
}

function OrbitRing({ radius, color, speed, tilt }) {
  const ring = useRef();
  useFrame(({ clock }) => {
    if (ring.current) ring.current.rotation.z = clock.getElapsedTime() * speed * 0.1;
  });
  const points = useMemo(() => {
    const pts = [];
    const seg = 120;
    for (let i = 0; i <= seg; i++) {
      const a = (i / seg) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius * 0.3, 0));
    }
    return pts;
  }, [radius]);
  const geo = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);
  return (
    <lineSegments geometry={geo} ref={ring} rotation={[tilt || 0.4, tilt || 0.2, 0]}>
      <lineDashedMaterial color={color} dashSize={0.08} gapSize={0.12} transparent opacity={0.25} />
    </lineSegments>
  );
}

function OrbitNodes({ count = 12, radius = 3.8, color = '#00d4aa' }) {
  const group = useRef();
  const nodes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      arr.push({
        angle: a,
        speed: 0.2 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
        size: 0.06 + Math.random() * 0.08,
      });
    }
    return arr;
  }, [count]);
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.children.forEach((child, i) => {
        if (i < nodes.length) {
          const n = nodes[i];
          const t = clock.getElapsedTime() * n.speed + n.offset;
          child.position.x = Math.cos(t) * radius;
          child.position.z = Math.sin(t) * radius * 0.6;
          child.position.y = Math.sin(t * 0.7) * radius * 0.2;
        }
      });
    }
  });
  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <mesh key={i}>
          <sphereGeometry args={[n.size, 8, 8]} />
          <meshBasicMaterial color={color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function Stars({ count = 800 }) {
  const ref = useRef();
  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 15 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      siz[i] = 0.05 + Math.random() * 0.15;
    }
    return [pos, siz];
  }, [count]);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.008;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.003) * 0.02;
    }
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#aabbee" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function ShootingStars() {
  const group = useRef();
  const stars = useMemo(() => [], []);
  useFrame(({ clock }) => {
    if (!group.current) return;
    if (Math.random() < 0.003) {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 4, 4),
        new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true })
      );
      const angle = Math.random() * Math.PI * 2;
      const radius = 10 + Math.random() * 20;
      mesh.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 10,
        Math.sin(angle) * radius
      );
      mesh.userData = {
        vx: -Math.cos(angle) * 0.3 + (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.15,
        vz: -Math.sin(angle) * 0.3 + (Math.random() - 0.5) * 0.1,
        life: 1,
      };
      group.current.add(mesh);
      stars.push(mesh);
    }
    stars.forEach((s, i) => {
      s.position.x += s.userData.vx;
      s.position.y += s.userData.vy;
      s.position.z += s.userData.vz;
      s.userData.life -= 0.015;
      s.material.opacity = s.userData.life;
      s.scale.setScalar(s.userData.life * 2);
      if (s.userData.life <= 0) {
        group.current.remove(s);
        stars.splice(i, 1);
      }
    });
  });
  return <group ref={group} />;
}

export default function HeroScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <MouseTracker>
          <Globe />
          <OrbitRing radius={3.2} color="#4488ff" speed={0.3} tilt={0.4} />
          <OrbitRing radius={4} color="#00d4aa" speed={-0.2} tilt={-0.3} />
          <OrbitRing radius={4.8} color="#f0c040" speed={0.15} tilt={0.6} />
          <OrbitNodes count={16} radius={3.5} color="#00d4aa" />
          <OrbitNodes count={12} radius={4.5} color="#f0c040" />
          <Stars />
          <ShootingStars />
        </MouseTracker>
      </Canvas>
    </div>
  );
}
