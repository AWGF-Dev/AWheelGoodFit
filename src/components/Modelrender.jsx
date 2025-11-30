// ModelGLB.jsx
import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function ModelGLB({ path, scale = 1 }) {
  const gltf = useGLTF(path) // 'true' enables draco compression if used
  return <primitive object={gltf.scene} scale={scale} />
}
