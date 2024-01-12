"use client"
import React, { useState } from 'react'

export default function RegisterPage() {

    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    
      return (
        <div>
          <h1>Register</h1>
          <input type="text" name='username' placeholder='username' onChange={e => setRegisterUsername(e.target.value) } />
          <input type="password" name='password' placeholder='passsword' onChange={e => setRegisterPassword(e.target.value) } />
          <button>Register</button>
        </div>
      )
}

