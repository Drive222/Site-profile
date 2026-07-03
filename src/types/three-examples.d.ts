declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera, EventDispatcher, Vector3 } from 'three';

  export class OrbitControls extends EventDispatcher {
    constructor(object: Camera, domElement?: HTMLElement);
    object: Camera;
    domElement: HTMLElement;
    enabled: boolean;
    target: Vector3;
    minDistance: number;
    maxDistance: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    rotateSpeed: number;
    enableDamping: boolean;
    dampingFactor: number;
    enablePan: boolean;
    enableZoom: boolean;
    autoRotate: boolean;
    autoRotateSpeed: number;
    panSpeed: number;
    update(): boolean;
    dispose(): void;
    reset(): void;
    saveState(): void;
    listenToKeyEvents(domElement: HTMLElement): void;
  }
}

declare module 'three/examples/jsm/loaders/FBXLoader' {
  import { LoadingManager, Group, LoadingManagerOptions, Material, AnimationClip, Event } from 'three';

  export class FBXLoader {
    manager: LoadingManager;
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (object: Group) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    setPath(path: string): void;
  }
}
