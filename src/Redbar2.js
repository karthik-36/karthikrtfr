import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/redbar2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.grr} position={[2.3, 0.6, 0.60]} scale={0.05} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.002']} position={[-0.70, 0.6, 0.90]} scale={0.05} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.001']} position={[-0.79, 3.42, 0.88]} rotation={[0, 0.09, -1.61]} scale={[0.02 , 0.05 , 0.02]} />
    </group>
  )
}

useGLTF.preload('/redbar2.glb')
