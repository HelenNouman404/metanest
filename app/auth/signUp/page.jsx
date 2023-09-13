import { Box, Button, TextField } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SignUp() {
  return (
    <div className='w-full h-full flex items-center justify-center login'>
    <Box width={520} sx={{ boxShadow: '2px 2px 13px 0 rgba(54,58,60,0.12)' , p : '45px 73px' , height: '100%'  }} className='main-login'>
       <div className='w-full flex justify-center mb-14'>
       <Image width={45} height={45} alt='' src='/assets/logo-wave.d0839793.svg' />
       </div>
       <form>
        <h4 className='mb-8 text-sm font-semibold' style={{color: '#8d98a2'}}>SIGN UP</h4>
        <TextField
          required
          id="outlined-required"
          label="Your email"
          className='w-full mb-6'
          placeholder='Email'
        />
        <TextField
          required
          id="outlined-password-input"
          label="Your password"
          type="password"
         fullWidth
          placeholder='Password'
          className='mb-6 '
        />
         <TextField
          required
          id="outlined-password-input"
          label="Repeat password"
          type="password"
         fullWidth
          placeholder='Password'
          className='mb-6'
        />
        <section className='mb-6'>
         <div style={{color:'#808fa3'}} className='flex items-center gap-2 mb-3'>
         <input type='checkbox' id='ag' className='w-4 h-4' required /> <label htmlFor='ag' className='' style={{fontSize: '13px'}}>I want to receive Free Analysis and Sign Up For Webinars</label>
         </div>
         <div style={{color:'#808fa3'}} className='flex items-center gap-2'>
         <input type='checkbox' id='ad' className='w-4 h-4' required /> <label htmlFor='ad' style={{fontSize: '13px'}}>I agree with <Link href='' className='mainClr'>Terms and Conditions</Link> and <Link href='' className='mainClr'>Privacy Policy</Link></label>
         </div>
        </section>
        <button className='btn w-full mb-10 p-4 mainBgClr text-black font-semibold hover:bg-amber-300 text-sm' >Sign up</button>
       </form>
       <div className='text-center w-full ask text-sm '>Already have an account? <Link href='/auth/loginPage ' className=''>Log in</Link></div>
      
    </Box>
    </div>
  )
}

export default SignUp