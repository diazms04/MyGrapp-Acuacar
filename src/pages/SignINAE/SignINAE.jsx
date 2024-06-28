import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import FooterP from '../../components/FooterP/FooterP';
import './SignINAE.scss';

export default function SignINAE() {
  const navigate = useNavigate();
  const [showFirstForm, setShowFirstForm] = useState(true);
  const [companyName, setCompanyName] = useState('');
  const [nit, setNit] = useState('');

  const handleFirstFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const isValid = form.checkValidity();
    if (isValid) {
      setShowFirstForm(false); // Hide the first form
    } else {
      form.reportValidity(); // Show validation messages
    }
    navigate('/UserPortal');
  };

 

  return (
    <>
      <div className='signin-container'>
        <NavBar />
        <div className="signin-context">
          <div id="signin_body" className='signin-section-body'>
            
              <div className='signin-form-container'>
                <h2 className='signin-form-title'>Inicio de Sesión</h2>
                <form className='signin-form' onSubmit={handleFirstFormSubmit}>
                  <div className='signin-form-group'>
                    <label htmlFor='username'>Usuario</label>
                    <input type='text' id='username' name='username' required />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='password'>Contraseña</label>
                    <input type='password' id='password' name='password' required />
                  </div>
                  <div className='signin-form-group'>
                    <button type='submit' className='signin-submit-button'>Ingresar</button>
                  </div>
                </form>
              </div>
          
          </div>
        </div>
        <FooterP />
      </div>
    </>
  );
}
