import { useNavigate } from 'react-router-dom';
import './UserPortal.scss';
import NavBar from '../../components/NavBar/NavBar';
import dropImg from '../../assets/896eb63c1827bbf6419fa31ef27e2462.png'

// Datos para la gráfica lineal


// Valores predefinidos para el eje Y (porcentaje)
// Aquí puedes ajustar los valores según tu necesidad

// Datos para la tabla
const tableData = [
    { practica: 'Practica 1', estado: 'En curso', fecha: '2024-06-01', servicio: 'servicio 1' },
    { practica: 'Practica 2', estado: 'Completado', fecha:'2024-06-15', servicio: 'servicio 2' },
    { practica: 'Practica 3', estado: 'Pendiente', fecha: '2024-06-20', servicio: 'servicio 3' },
];

function UserPortal() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/toolsGra');

  };
  
  // Función para formatear el valor con porcentaje
  

  return (
    <>
      <div className='container_User_Personal'>
        
        <NavBar/>

        <div className='first_section'>
            
          <div className='AccountResume'>
        
          <div className='resume'>
            <div className='card_title'>
            <h3>Infromación General</h3>
            </div>
          
          <div className='user-content'>
            <p><span>Usuario:</span> <span>Restaurante Vitrom</span></p>
            <p><span>Dirección:</span> <span>Centro</span></p>
            <p><span>Sector:</span> <span>Gastronomico</span></p>
            <p><span>Póliza:</span> <span>942832</span></p>
            <p><span>Año Evaluado:</span> <span>2023</span></p>
            <p><span>Convenio:</span> <span>2023-2024</span></p>
            <p><span>Estado GRR:</span> <span>48%</span></p>
            <p><span>Categoria 2023:</span> <span>GOLD</span></p>

          </div>
          
          <div className='user-content'>
            <h4>Portal de Novedades</h4>
            <p><span>Nuevas Noticias</span></p>
            <p><a href="https://api.whatsapp.com/send/?phone=3008337164&text&type=phone_number&app_absent=0">WhatsApp</a></p>
            <p><a href="https://www.acuacar.com/InicioSesion?returnurl=%2fServicios%2fLaboratorio-calidad-de-aguas">Acuacar</a></p>
            
          </div>
                      <button id='b_general' className='back-button' onClick={handleButtonClick}>Herramientas</button>

          
            

</div>
          </div>
        
          <div className='container_charts'>
            <div className="line-chart-container">

              <div className='img_drop'>
              <img className="drop" src={dropImg} alt="ss" />
              </div>
              <div className='tabla-container1'>
            
              <table className='tabla-practicas'>
                <thead>
                  <tr>
                    <th>Elemento</th>
                    <th>Variable</th>
                    <th>Resultado</th>
                    <th>Valoracion</th>
                    <th>Diagnostico</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.fecha}</td>
                        <td>{row.practica}</td>
                        <td>{row.servicio}</td>
                        <td>{row.estado}</td>
                        <td>{row.estado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
              


            

            <div className='tabla-container'>
            <div className='process_title'>
                <h2>Estado de Servicios GRA</h2>
            </div>
              <table className='tabla-practicas'>
                <thead>
                  <tr>
                    <th>Fecha de la Solicitud</th>
                    <th>Practica</th>
                    <th>Servicio</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.fecha}</td>
                        <td>{row.practica}</td>
                        <td>{row.servicio}</td>
                        <td>{row.estado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
    
        </div>
        <div>
           
        </div>
      </div>
    </>
  )
}

export default UserPortal;
