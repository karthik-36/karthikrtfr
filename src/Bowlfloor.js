import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/bowlfloor.glb')
  return (
    <group scale = {[1,1,1]} position = {[0,0.2,0]} ref={group} {...props} dispose={null}>
 
    </group>
  )
}

useGLTF.preload('/bowlfloor.glb')
