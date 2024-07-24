import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import FooterP from '../../components/FooterP/FooterP';
import './SignUP.scss';
import { useState } from 'react';
import { User } from '../../../api';

export default function SignUP() {
  const userController = new User();
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Usuario: null,
    NombreEmpresa: null,
    Direccion: null,
    Sector: null,
    Poliza: null,
    Contrasena: null,
  });


  const handleFirstFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const response = await userController.postUser(formData);
    if (!response) return;
    navigate('/signINAcuacarEmployee');
  };

  const handleChange = (e) => {
    const data = {...formData, [e.target.name]: e.target.value};
    setFormData(data);
  }


  return (
    <>
      <div className='signin-container'>
        <NavBar />
        <div className="signin-context">
          <div id="signin_body" className='signin-section-body'>
            
              <div className='signin-form-container'>
                <h2 className='signin-form-title'>Registro de Usuario</h2>
                <form className='signin-form' onSubmit={handleFirstFormSubmit}>
                  <div className='signin-form-group'>
                    <label htmlFor='username'>Usuario</label>
                    <input type='text' id='username' name='Usuario' value={formData.Usuario} required onChange={handleChange} />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='username'>Nombre De la Empresa</label>
                    <input type='text' id='username' name='NombreEmpresa' value={formData.NombreEmpresa} required onChange={handleChange} />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='username'>Dirección</label>
                    <input type='text' id='username' name='Direccion' value={formData.Direccion} required onChange={handleChange} />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='username'>Sector</label>
                    <input type='text' id='username' name='Sector' value={formData.Sector} required onChange={handleChange} />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='username'>Poliza</label>
                    <input type='number' id='username' name='Poliza' value={formData.Poliza} required onChange={handleChange} />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='password'>Contraseña</label>
                    <input type='password' id='password' name='Contrasena' value={formData.Contrasena} required onChange={handleChange} />
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
