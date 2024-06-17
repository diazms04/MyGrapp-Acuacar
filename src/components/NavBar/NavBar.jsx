import React from 'react'
import './NavBar.scss'
import imglo from '../../assets/Logo Acuacar 2019.png'
import logoPatio from '../../assets/patio.png'

function NavBar({leftChildren}) {
  return (
    <>
        <div className='nav_container'>
          <div className='logos_pro'>
            {leftChildren}
        </div>

        <div className='title_nav'>
            <h1 className='titles'>My Grapp</h1>
        </div>
          
        <div className='logos_pro'>

        </div>
        </div>
    </>
  )
}

export default NavBar