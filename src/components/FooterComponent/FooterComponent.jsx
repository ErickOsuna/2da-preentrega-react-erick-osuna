import React from 'react';
import instagram from '../../img/instagram.png'
import twitter from '../../img/twitter.png'
import facebook from '../../img/facebook.png'
import linkedin from '../../img/linkedin.png'

export const FooterComponent = () => {
  return (
    <div className='footer'>
      <p className='copy'>© 2023 Erick Osuna Saavedra</p>
      <div className='icons'>
        <a href="#"><img src={instagram} alt="" /></a>
        <a href="#"><img src={twitter} alt="" /></a>
        <a href="#"><img src={facebook} alt="" /></a>
        <a href="#"><img src={linkedin} alt="" /></a>
      </div>
    </div>
  )
}
