import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function InteractiveEarth() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 4.2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    const directionalLight = new THREE.DirectionalLight(0x85d9ff, 1.1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(ambientLight, directionalLight);

    const textureLoader = new THREE.TextureLoader();
    const textureUrl = new URL('../../assets/uploads/earth/textures/1_earth_8k.jpg', import.meta.url).href;

    const loader = new FBXLoader();
    const modelUrl = new URL('../../assets/uploads/earth/source/Earth.fbx', import.meta.url).href;

    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    let earthMesh: THREE.Mesh | null = null;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    renderer.domElement.style.touchAction = 'pan-y';
    renderer.domElement.style.cursor = 'grab';

    const updateInteraction = (event: PointerEvent) => {
      if (!earthMesh) {
        controls.enabled = false;
        return;
      }

      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);

      const intersects = raycaster.intersectObject(earthMesh, true);
      const hit = intersects.length > 0;
      controls.enabled = hit;
      controls.enableZoom = hit;
      renderer.domElement.style.cursor = hit ? 'grabbing' : 'default';

      if (hit) {
        event.preventDefault();
      }
    };

    textureLoader.load(textureUrl, (texture) => {
      texture.flipY = false;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

      loader.load(
        modelUrl,
        (object: THREE.Group) => {
          const meshes: THREE.Mesh[] = [];
          object.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              meshes.push(child as THREE.Mesh);
            }
          });

          const primaryMesh =
            meshes.find((mesh) => {
              const material = mesh.material;
              if (Array.isArray(material)) {
                return material.every((item) => !item.transparent && item.opacity === 1);
              }
              return !material.transparent && material.opacity === 1;
            }) ?? meshes[0];

          meshes.forEach((mesh) => {
            if (mesh !== primaryMesh) {
              mesh.parent?.remove(mesh);
            }
          });

          if (primaryMesh) {
            earthMesh = primaryMesh;
            earthMesh.castShadow = true;
            earthMesh.receiveShadow = true;
            earthMesh.renderOrder = 0;
            earthMesh.material = new THREE.MeshStandardMaterial({
              map: texture,
              roughness: 0.45,
              metalness: 0.05,
              emissive: 0x0a244a,
              emissiveIntensity: 0.15,
            });
          }

          const box = new THREE.Box3().setFromObject(object);
          const size = box.getSize(new THREE.Vector3()).length();
          const scale = 2.6 / size;
          object.scale.setScalar(scale);
          object.position.set(0, 0.08, 0);
          earthGroup.add(object);
        },
        undefined,
        () => {
          // If model loading fails, keep the default placeholder sphere.
        }
      );
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    const onPointerDown = (event: PointerEvent) => updateInteraction(event);
    const onPointerUp = () => {
      if (controls.enabled) {
        renderer.domElement.style.cursor = 'grab';
      } else {
        renderer.domElement.style.cursor = 'default';
      }
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointerleave', onPointerUp);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.rotateSpeed = 0.45;
    controls.minDistance = 2.5;
    controls.maxDistance = 6;
    controls.autoRotate = false;

    const resizeRenderer = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resizeRenderer();
    window.addEventListener('resize', resizeRenderer);

    const animate = () => {
      earthGroup.rotation.y += 0.002;
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeRenderer);
      controls.dispose();
      renderer.dispose();
      scene.clear();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="h-full min-h-[24rem] w-full rounded-[1.5rem] bg-transparent" ref={mountRef} />;
}
