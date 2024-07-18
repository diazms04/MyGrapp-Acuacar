import React from 'react'
import './Home.scss'
import NavBar from '../../components/NavBar/NavBar'
import FooterP from '../../components/FooterP/FooterP'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
  
    const handleClick = (type) => {
      if (type === 1) {
        navigate('/signINAcuacarEmployee'); // Replace with your target route
      }
      if (type === 2) {
        navigate('/signUP'); // Replace with your target route
      }
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
              <div className='buttons-container'>
                <button onClick={() => handleClick(1)} className='logins'>Ingresar a My GRApp</button>
                <button onClick={() => handleClick(2)} className='logins'>Registarse</button>
              </div>
            </div>
          </div>
          <FooterP/>
        </div>
      </>
    )
}
