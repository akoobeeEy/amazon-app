import React from 'react'
import { footerBottomItem } from '../../constants/allData'

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='w-full grid grid-cols-3 md:grid-cols-5 lgl:grid-cols-6 gap-3 px-6 place-content-center items-start text-gray-400'>
{
  footerBottomItem.map((item)=>(
    <div className='group cursor-pointer' key={item.id}>
      
      <h3 className='footerBottomTitle'>{item.title}</h3>
      <p className='footerBottomText'>{item.des}</p>
    </div>
  ))
}
        </div>
      </div>
    </div>
  )
}

export default FooterBottom