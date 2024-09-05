import React from 'react'
import aboutStyle from './about.module.css'
export default function page() {
  return (
    <div className='text-red'>
      About
      <div style={{
        width: '100px',
        height: '100px',
      }} className='bg-red-500 rounded-md'>

      </div>

      <div className={aboutStyle.box}>
         hello
      </div>
    </div>
  )
}
