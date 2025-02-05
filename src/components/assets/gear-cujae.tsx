import React from 'react';
import Image from "next/image";

export default function GearCujae() {
  return (
    <>
      <p>probando imagen</p>
      <Image
        src='/images/ai2.gif'
        width={130}
        height={220}
        style={{ width: '200px', height: '420px', zIndex: -1, top='4px'}}
        alt='se hizo el intento'
      />
    </>
  )
}
