import React from 'react';
import './Payment.scss'; // Asegúrate de tener un archivo CSS para estilizar la página
import NavBar from '../../components/NavBar/NavBar';


const services = [
  { name: 'Servicio 1', price: 50 },
  { name: 'Servicio 2', price: 75 },
  { name: 'Servicio 3', price: 100 },
  { name: 'Servicio 4', price: 150 },
];

export default function Payment() {
  return (
    <>
    <NavBar/>
    <div className='payment-page'>
    <div className="payment-container">
      <h1>Pago de Servicios</h1>
      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index} className="service-item">
            <span>{service.name}</span>
            <span>${service.price}</span>
          </li>
        ))}
      </ul>
      <button className="pay-button">Pagar</button>
    </div>
    </div>
    </>
  );
}
