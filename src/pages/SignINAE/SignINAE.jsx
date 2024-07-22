import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import FooterP from '../../components/FooterP/FooterP';
import './SignINAE.scss';
import { Auth } from '../../../api/auth';

export default function SignINAE() {
  const authController = new Auth();
  
  const navigate = useNavigate();
  const [showFirstForm, setShowFirstForm] = useState(true);
  const [companyName, setCompanyName] = useState('');
  const [nit, setNit] = useState('');
  const [formData, setFormData] = useState({Usuario: null, Contrasena: null});

  const handleFirstFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const isValid = form.checkValidity();
    console.log("🚀 ~ handleFirstFormSubmit ~ isValid:", isValid)
    if (isValid) {
      setShowFirstForm(false); // Hide the first form
    } else {
      form.reportValidity(); // Show validation messages
    }

    try {
      const response = await authController.signin(formData);
    
      if (response) {
        authController.setDataUser(response);
        navigate('/UserPortal'); // Navigate to UserPortal only if the response is valid
      } else {
         // Show an error message if the response is invalid
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert('Error al iniciar sesión, por favor intente de nuevo.');
    }
  };

  const handleChange = (e) => {
    const dataObject = {...formData, [e.target.name]: e.target.value};
    setFormData(dataObject);
  }

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
                    <input type='text' id='username' name='Usuario' value={formData.Usuario} onChange={handleChange} required />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='password'>Contraseña</label>
                    <input type='password' id='password' name='Contrasena' value={formData.Contrasena} onChange={handleChange} required />
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
