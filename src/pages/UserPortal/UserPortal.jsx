import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './UserPortal.scss';
import NavBar from '../../components/NavBar/NavBar';

// Datos para la gráfica lineal
const data = [
    { name: 'Enero', Progreso: 10 },
    { name: 'Febrero', Progreso: 20 },
    { name: 'Marzo', Progreso: 30 },
    { name: 'Abril', Progreso: 40 },
    { name: 'Mayo', Progreso: 50 },
    { name: 'Junio', Progreso: 60 },
    { name: 'Julio', Progreso: 70 },
    { name: 'Agosto', Progreso: 80 },
    { name: 'Septiembre', Progreso: 90 },
    { name: 'Octubre', Progreso: 70 },
    { name: 'Noviembre', Progreso: 90 },
    { name: 'Diciembre', Progreso: 100 },
];

// Valores predefinidos para el eje Y (porcentaje)
const valoresY = [0, 20, 40, 60, 80, 100]; // Aquí puedes ajustar los valores según tu necesidad

function UserPortal() {
  
  // Función para formatear el valor con porcentaje
  const formatPercent = (value) => {
    return `${value}%`;
  };

  return (
    <>
      <div>
        {/* Componente NavBar */}
        <NavBar/>
        
        {/* Componente de Gráfica Lineal */}
        <div className="line-chart-container">
          <LineChart  className='progress_chart' 
            width={1100}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"  />
            <YAxis ticks={valoresY} tickFormatter={formatPercent} />
            <Tooltip formatter={formatPercent} />
            <Legend />
            <Line className='lin' type="monotone" dataKey="Progreso" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </>
  )
}

export default UserPortal;
