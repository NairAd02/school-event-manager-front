import React from 'react';
import Image from "next/image";

export default function GearCujae() {
  return (
    <>
      <p>probando imagen</p>
      <Image
        src='/images/ai.gif'
        width={130}
        height={220}
        style={{ width: '100px', height: '220px' }}
        alt='se hizo el intento'
      />
    </>
  )
}
