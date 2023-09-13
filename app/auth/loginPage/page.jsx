import { Box, Button, TextField } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function LogInPage() {
  return (
    <div className='w-full h-full flex items-center justify-center login'>
    <Box width={520} sx={{ boxShadow: '2px 2px 13px 0 rgba(54,58,60,0.12)' , p : '61px 73px' , height: '93%'  }} className='main-login'>
       <div className='w-full flex justify-center mb-16'>
       <Image width={60} height={60} alt='' src='/assets/logo-wave.d0839793.svg' />
       </div>
       <form>
        <h4 className='mb-8 text-sm font-semibold' style={{color: '#8d98a2'}}>LOGIN</h4>
        <TextField
          required
          id="outlined-required"
          label="Email"
          className='w-full mb-8'
          placeholder='Email'
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
         fullWidth
          placeholder='Password'
          className='mb-5'
        />
        <section className='flex items-center justify-between gap-4 mb-6 text-sm flex-wrap md:text-base sm:flex-nowrap'>
         <div style={{color:'#808fa3'}} className='flex items-center gap-2'>
         <input type='checkbox' id='remember' className='w-4 h-4' required /> <label htmlFor='remember' className='text-sm'>Remember me</label>
         </div>
         <Link href='/auth/forgetPassword' className='mainClr font-semibold text-sm'>Forget Password?</Link>
        </section>
        <button className='btn w-full mb-10 p-4 mainBgClr text-black font-semibold hover:bg-amber-300'>Log in</button>
       </form>
       <div className='text-center w-full ask  text-sm'>Don't have an account? <Link href='/auth/signUp'>Sign up</Link></div>
       <div className='text-center w-full ask text-sm'>Didn't receive confirmation instruction? <Link href='/auth/resend'>Resend</Link></div>
    </Box>
    </div>
  )
}

export default LogInPage