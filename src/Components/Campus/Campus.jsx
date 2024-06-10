import React from 'react'
import './Campus.css'
import pic_1 from '../../assets/gallery-1.png'
import pic_2 from '../../assets/gallery-2.png'
import pic_3 from '../../assets/gallery-3.png'
import pic_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () =>{
  return(
    <div className='campus'>
      <div className='gallery'>
        <img src={pic_1} className='camp' />
        <img src={pic_2} className='camp' />
        <img src={pic_3} className='camp' />
        <img src={pic_4} className='camp' />
      </div>
      <button className='btn btn-dark'>See more here <img src={white_arrow} /></button>
    </div>
  )
}
export default Campus;