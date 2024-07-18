import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import FooterP from '../../components/FooterP/FooterP';
import './SignUP.scss';

export default function SignUP() {
  const navigate = useNavigate();


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
                    <label htmlFor='username'>Nombre De la Empresa</label>
                    <input type='text' id='username' name='username' required />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='username'>Dirección</label>
                    <input type='text' id='username' name='username' required />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='username'>Sector</label>
                    <input type='text' id='username' name='username' required />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='username'>Poliza</label>
                    <input type='text' id='username' name='username' required />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='password'>Contraseña</label>
                    <input type='password' id='password' name='password' required />
                  </div>
                  <div className='signin-form-group'>
                    <label htmlFor='password'>Repetir Contraseña</label>
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
