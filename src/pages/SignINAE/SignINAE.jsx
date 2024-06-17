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
  };

  const handleSecondFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Redirect to the ToolsGra page with companyName and nit as state
    navigate('/toolsGra', { state: { companyName, nit } });
  };

  return (
    <>
      <div className='signin-container'>
        <NavBar />
        <div className="signin-context">
          <div id="signin_body" className='signin-section-body'>
            {showFirstForm ? (
              <div className='signin-form-container'>
                <h2 className='signin-form-title'>Empleado Acuacar</h2>
                <form className='signin-form' onSubmit={handleFirstFormSubmit}>
                  <div className='signin-form-group'>
                    <label htmlFor='employee_id'>Numero de ID</label>
                    <input type='text' id='employee_id' name='employee_id' required />
                  </div>
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
            ) : (
              <div className='signin-form-container'>
                <h2 className='signin-form-title'>Datos de la Empresa</h2>
                <form className='signin-form' onSubmit={handleSecondFormSubmit}>
                  <div className='signin-form-group'>
                    <label htmlFor='company_name'>Nombre</label>
                    <input
                      type='text'
                      id='company_name'
                      name='company_name'
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='nit'>NIT</label>
                    <input
                      type='text'
                      id='nit'
                      name='nit'
                      value={nit}
                      onChange={(e) => setNit(e.target.value)}
                      required
                    />
                  </div>
                  <div className='signin-form-group'>
                    <button type='submit' className='signin-submit-button'>Enviar</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        <FooterP />
      </div>
    </>
  );
}
