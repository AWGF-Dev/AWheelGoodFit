import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState, Suspense, useFrame } from 'react';
import * as THREE from 'three';
import { useSpring } from '@react-spring/three';
import { OrbitControls, Center, useGLTF } from '@react-three/drei';
import ModelRender from './Modelrender';
import CameraControls from './CameraControls';
import HotspotOverlay from './HotspotOverlay';
import HelpPopup from './HelpPopup';
import FeedbackPrompt from './FeedbackPrompt';
import { Environment } from '@react-three/drei';
import { useProgress } from '@react-three/drei';
import LoadingScreen from './LoadingScreen';
import { DebugCamera } from './DebugCamera';
import { getAssetUrl } from '../utils/getAssetUrl';

console.log('GLB URL:', getAssetUrl('goopcompressed2kfinal.glb'));


// function Viewer () {
//   useEffect (() => {
//     console.log(getAssetUrl('bakedchair.glb'));
//   }, []);

function AnimatedCamera({
  target,
  controlsRef,
  defaultPos = [-3, 4, 5],
  defaultLookAt = [0, 1, 0],
}) {
  const { camera } = useThree();

  const [spring, api] = useSpring(() => ({
    camPos: camera.position.toArray(),
    lookAt: defaultLookAt,
    config: { mass: 1, tension: 60, friction: 18 },
    onChange: ({ value }) => {
      camera.position.set(...value.camPos);

      if (controlsRef.current) {
        controlsRef.current.target.set(...value.lookAt);
        controlsRef.current.update();
      }
    },
  }));

  useEffect(() => {
    if (!controlsRef.current) return;

    const fromCam = camera.position.toArray();
    const fromLook = controlsRef.current.target.toArray();

    if (target) {
      const pos = target.position;
      const offset = target.offset || [1, 0.5, 1];

      const toCam = new THREE.Vector3(...pos)
        .add(new THREE.Vector3(...offset))
        .toArray();

      api.start({
        from: { camPos: fromCam, lookAt: fromLook },
        to: { camPos: toCam, lookAt: pos }, // always look at the hotspot's position
      });

    } else {
      api.start({
        from: { camPos: fromCam, lookAt: fromLook },
        to: { camPos: defaultPos, lookAt: defaultLookAt },
      });
    }
  }, [target, api, camera, controlsRef, defaultPos, defaultLookAt]);

  return null;
}


export default function ModelCanvas({ cameraTarget, onHotspotClick, hotspots, activeHotspot, activePage }) {
  const controlsRef = useRef();
  const [showHelp, setShowHelp] = useState(false);
  const [closingHelp, setClosingHelp] = useState(false);
  const [showAllLabels, setShowAllLabels] = useState(false);
  const { progress } = useProgress(); 


  useEffect(() => {
    // Clear GLTF cache so loader shows again
    useGLTF.clear(getAssetUrl('goopcompressed2kfinal.glb'));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowHelp(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setClosingHelp(true);
    setTimeout(() => {
      setShowHelp(false);
      setClosingHelp(false);
    }, 300); // matches animation duration
  };

  useEffect(() => {
    const forwardWheel = (e) => {
      if (controlsRef.current) {
        controlsRef.current.dispatchEvent({ type: "wheel", deltaY: e.deltaY });
      }
  };
    document.addEventListener("wheel", forwardWheel, { passive: false });
    return () => document.removeEventListener("wheel", forwardWheel);
  }, []);



  return (
    <div className="flex-1 w-full h-screen overflow-hidden z-10" style={{ positon:"relative" }}>

      
      <Canvas
        onContextMenu={(e) => e.preventDefault()}
        shadows
        camera={{ position: [5, 3, 5], fov: 50 }}
        style={{ width: '100%', height: '100%', background: '#f1efefff' }}
      >

        <DebugCamera />

        <Suspense fallback={<LoadingScreen progress={progress} />}> 
          <ambientLight intensity={0.6} />
          <directionalLight castShadow position={[5, 5, 5]} intensity={3} />
          <directionalLight castShadow position={[-5, 5, -5]} intensity={3} />
          <directionalLight castShadow position={[0, 5, -5]} intensity={3} />

          <AnimatedCamera target={cameraTarget} controlsRef={controlsRef} />

        
            <ModelRender
              key={activePage} 
              path={getAssetUrl("goopcompressed2kfinal.glb")}
              scale={0.04}
            />
          
          

          <Environment files={getAssetUrl('golden_gate_hills_4k.hdr')} background={false} />

          <CameraControls ref={controlsRef} disableControls={!!cameraTarget} />

          {/* Hotspots rendered as HTML overlays */}
          <HotspotOverlay hotspots={hotspots} onHotspotClick={onHotspotClick} activeHotspot={activeHotspot} showAllLabels={showAllLabels} />
        </Suspense>
        
      </Canvas>

        {/* Corner container */}
        <div className="absolute top-4 right-4 z-40 flex flex-col space-y-2 transition-all duration-500">

          {/* Help popup only when showHelp is true */}
          {showHelp && (
            <HelpPopup onClose={closePopup} closing={closingHelp} />
          )}

          {/* Checkbox always visible */}
          <div className={`
            bg-black/55 text-white p-2 rounded-xl shadow-lg w-64 
            select-none backdrop-blur-sm 
            transition-all duration-500 overflow-hidden
            ${closingHelp ? "opacity-0 scale-95 max-h-0 p-0" : "opacity-100 scale-100 max-h-96"}
          `}>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showAllLabels}
                onChange={(e) => setShowAllLabels(e.target.checked)}
              />
              <span className="text-sm">Show all labels</span>
            </label>
          </div>
        </div>



      <FeedbackPrompt />
    </div>
  );
}
