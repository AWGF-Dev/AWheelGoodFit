import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";

const CameraControls = forwardRef(({ disableControls = false, ...props }, ref) => {
  const { camera, gl } = useThree();

  // Optional: clamp panning within bounds
  const min = new THREE.Vector3(-3, 0, -3);
  const max = new THREE.Vector3(3, 4, 3);

  return (
    <OrbitControls
      ref={ref}
      args={[camera, gl.domElement]}
      enablePan={!disableControls}
      enableZoom={!disableControls}
      enableRotate
      screenSpacePanning
      enableDamping
      dampingFactor={0.025}
      zoomSpeed={0.4}
      enableDollyZoom={false}
      panSpeed={0.6}
      rotateSpeed={0.5}
      minDistance={0.6}
      maxDistance={10}
      onChange={() => {
        if (!ref?.current) return;
        
        const t = ref.current.target;
        t.x = Math.max(min.x, Math.min(max.x, t.x));
        t.y = Math.max(min.y, Math.min(max.y, t.y));
        t.z = Math.max(min.z, Math.min(max.z, t.z));
      }}
      {...props}
    />
  );
});

export default CameraControls;
    