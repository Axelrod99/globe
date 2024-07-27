import React from 'react'

const Footer = () => {
  return (
    <div className='py-5'>
      <div className='grid grid-cols-3 text-center mt-10 text-[12px] font-bold'>
        <p className='hover:underline cursor-pointer'>Terms of Use</p>
        <p className='hover:underline cursor-pointer'>Code of Conduct</p>
        <p className='hover:underline cursor-pointer'>Privacy Policy</p>
        <p className='hover:underline cursor-pointer'>Corperae</p>
        <p className='hover:underline cursor-pointer'>Support</p>
        <p className='hover:underline cursor-pointer'>Contact</p>
      </div>

      <div className='text-[10px] text-center mt-10 flex justify-center font-light'>
        <p>© 2005-2024 Soccer Manager Ltd. All rights reserved. All trademarks are the property of their respective owners.</p>
      </div>
    </div>
  )
}

export default Footer