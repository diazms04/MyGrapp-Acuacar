import React from 'react'
import './FooterP.scss'
import imglo from '../../assets/acua.png'
import logoPatio from '../../assets/patio.png'


function FooterP() {
  return (
    <>
        <div className='nav_containerF'>
          <div className='logos_pro2'>
            <img src={imglo} alt="ss" />
            <img src={logoPatio} alt="" />
          </div>
        </div>
    </>
  )
}

export default FooterP