import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export function DebugCamera() {
  const { camera } = useThree();
  const lastLog = useRef(0);

  useFrame(({ clock }) => {
    // Limit console logs to every 0.25 seconds
    if (clock.elapsedTime - lastLog.current > 5.00) {
      lastLog.current = clock.elapsedTime;

      console.log("Camera Position:", camera.position.toArray());

      // If using OrbitControls:
      if (camera.controls && camera.controls.target) {
        console.log(
          "Camera Target:",
          camera.controls.target.toArray()
        );
      }
    }
  });

  return null;
}
