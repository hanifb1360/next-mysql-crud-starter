"use client"
import React, { useState } from 'react'

export default function LoginPage() {

  const [loginUsername, setLoginUsername] = useState('');
const [loginPassword, setLoginPassword] = useState('');

  return (
    <div>
      <h1>Login</h1>
      <input type="text" name='username' placeholder='username' onChange={e => setLoginUsername(e.target.value) } />
      <input type="password" name='password' placeholder='passsword' onChange={e => setLoginPassword(e.target.value) } />
      <button>LOGIN</button>
    </div>
  )
}
