import React from 'react'
import Link from 'next/link'
const Unauthorized = () => {
  return (
    <div>
        <h1>Unauthorized</h1>
        <p>No tienes permisos para acceder a esta página</p>
        <Link href="/home">Ir a inicio</Link>
        <Link href="/login">Autenticarse</Link>
    </div>
  )
}

export default Unauthorized;
