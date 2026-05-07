import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.55, 8.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const bottleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffeee4,
      metalness: 0,
      roughness: 0.08,
      transmission: 0.58,
      thickness: 1.8,
      transparent: true,
      opacity: 0.58,
      ior: 1.45,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
    });

    const liquidMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc66a41,
      roughness: 0.18,
      metalness: 0.04,
      transparent: true,
      opacity: 0.82,
      clearcoat: 0.5,
    });

    const darkGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x24120e,
      metalness: 0.2,
      roughness: 0.16,
      transparent: true,
      opacity: 0.9,
      clearcoat: 0.8,
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd79a5b,
      metalness: 0.62,
      roughness: 0.22,
    });

    const labelMaterial = new THREE.MeshStandardMaterial({
      color: 0xfff8ee,
      metalness: 0.05,
      roughness: 0.35,
    });

    const bottle = new THREE.Mesh(
      new THREE.BoxGeometry(2.05, 3.2, 0.95, 10, 10, 10),
      bottleMaterial,
    );
    bottle.position.y = -0.45;
    group.add(bottle);

    const liquid = new THREE.Mesh(
      new THREE.BoxGeometry(1.78, 1.85, 0.78, 8, 8, 8),
      liquidMaterial,
    );
    liquid.position.y = -0.98;
    group.add(liquid);

    const label = new THREE.Mesh(new THREE.BoxGeometry(1.16, 0.82, 0.035), labelMaterial);
    label.position.set(0, -0.68, 0.5);
    group.add(label);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.33, 0.4, 0.62, 48), goldMaterial);
    neck.position.y = 1.42;
    group.add(neck);

    const cap = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.6, 0.9, 6, 6, 6), darkGlassMaterial);
    cap.position.y = 1.98;
    group.add(cap);

    const sprayer = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.16, 48), goldMaterial);
    sprayer.position.y = 1.72;
    group.add(sprayer);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xffc08a,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
    });

    const rings = new THREE.Group();
    for (let index = 0; index < 3; index += 1) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2.1 + index * 0.46, 0.008, 10, 96),
        ringMaterial,
      );
      ring.rotation.x = Math.PI / 2.8 + index * 0.1;
      ring.rotation.z = index * 0.62;
      rings.add(ring);
    }
    rings.position.y = -0.12;
    scene.add(rings);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 140;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      const radius = 2.3 + Math.random() * 2.6;
      const angle = Math.random() * Math.PI * 2;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = -2.2 + Math.random() * 4.8;
      positions[index * 3 + 2] = Math.sin(angle) * radius - 0.4;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0xd79a5b,
        size: 0.025,
        transparent: true,
        opacity: 0.55,
      }),
    );
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0xfff0dc, 1.6));
    const keyLight = new THREE.DirectionalLight(0xffd4ad, 3.3);
    keyLight.position.set(3.5, 4, 5);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0xb55a3b, 18, 16);
    rimLight.position.set(-3.4, 1.8, 2.4);
    scene.add(rimLight);
    const coolLight = new THREE.PointLight(0x7fa18d, 8, 14);
    coolLight.position.set(3, -1.5, -2);
    scene.add(coolLight);

    const pointer = new THREE.Vector2(0, 0);
    const handlePointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const handleResize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      const scale = width < 560 ? 0.78 : width < 860 ? 0.9 : 1;
      group.scale.setScalar(scale);
      rings.scale.setScalar(scale);
    };

    window.addEventListener("resize", handleResize);
    mount.addEventListener("pointermove", handlePointerMove);
    handleResize();

    let frameId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y = Math.sin(elapsed * 0.45) * 0.15 + pointer.x * 0.14;
      group.rotation.x = -0.04 + pointer.y * 0.08;
      group.position.y = Math.sin(elapsed * 0.8) * 0.12;
      rings.rotation.z = elapsed * 0.18;
      rings.rotation.x = Math.PI / 2.9 + Math.sin(elapsed * 0.5) * 0.08;
      particles.rotation.y = elapsed * 0.035;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      mount.removeEventListener("pointermove", handlePointerMove);
      renderer.dispose();
      particleGeometry.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.domElement.remove();
    };
  }, []);

  return <div className="hero-three-scene" ref={mountRef} aria-label="3D perfume bottle" />;
}
