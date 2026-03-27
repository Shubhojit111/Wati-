import React from 'react'
import WatiButton from '../components/WatiButton'

const Footer = () => {
  return (
    <div className='py-28 flex justify-center items-center flex-col gap-8'>
        <h1 className='text-[56px] font-semibold tracking-tight '>Already a Wati user? Log in here.</h1>

        <WatiButton text="Log in"/>
    </div>
  )
}

export default Footer