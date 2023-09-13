import { Box, Button, TextField } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ResendConfirmation() {
  return (
    <div className='w-full h-full flex items-center justify-center login'>
    <Box width={510} sx={{ boxShadow: '2px 2px 13px 0 rgba(54,58,60,0.12)' , p : '61px 73px' , height: '80%'  }} className='main-login'>
       <div className='w-full flex justify-center mb-16'>
       <Image width={60} height={60} alt='' src='/assets/logo-wave.d0839793.svg' />
       </div>
       <form>
        <h3 className='mb-2 text-lg font-semibold'>Resend confirmation instructions</h3>
        <p className='text-sm mb-12'>Please type in your email to retrieve confirmation instructions</p>
        <TextField
          required
          id="outlined-required"
          label="your email"
          className='w-full mb-6'
          placeholder='Email'
        />
      
        <button className='btn w-full mb-14 p-4 mainBgClr text-black font-semibold hover:bg-amber-300'>Resend instructions</button>
       </form>
       <div className='text-center w-full ask text-sm '>Want to give it another try? <Link href='/auth/loginPage'>Log in</Link></div>
       <div className='text-center w-full ask text-sm '>Don't have an account? <Link href='/auth/signUp'>Sign up</Link></div>
     
    </Box>
    </div>
  )
}

export default ResendConfirmation