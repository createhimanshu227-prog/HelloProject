import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("email is", email)
    console.log("password is", password)

    handleLogin(email, password)

    setEmail('')
    setPassword('')
  }

      


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className= 'border-2 rounded-xl border-pink-600 p-20'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className= 'flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)

            }}
            required
            className= 'outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-500' type="email" placeholder='Enter your email' />
            <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }} 
             required
              className= 'outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-500' type="password" placeholder='Enter password' />
            <button className= 'mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-white'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
