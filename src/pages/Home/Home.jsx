import React from 'react'
import './Home.scss'
import NavBar from '../../components/NavBar/NavBar'
import FooterP from '../../components/FooterP/FooterP'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/signINAcuacarEmployee'); // Replace with your target route
    };
  return (
    <>
    <div className='container_home'>
      <NavBar/>
      <div className="context">
        <div className='section_body'>
          <div className='slogan'>
            <h3>Herramienta que facilita la gestión responsable del agua</h3>
          </div>
          <div>
            <button onClick={handleClick} className='logins'>Ingresar a My GRApp</button>
          </div>
        </div>
        
      </div>
      <FooterP/>
    </div>
    </>
  )
}
