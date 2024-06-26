import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import BackButton from '../../components/BackButton/BackButton';

import './Vca.scss';

function Vca() {
  const [proveedor1, setProveedor1] = useState('');
  const [proveedor2, setProveedor2] = useState('');

  const handleProveedor1Change = (event) => {
    setProveedor1(event.target.value);
  };

  const handleProveedor2Change = (event) => {
    setProveedor2(event.target.value);
  };

  return (
    <div className='vca-container'>
      <NavBar leftChildren={<BackButton/>}/>
      <div className='title_tools'>
        <h1>1.1. Verificación de las condiciones de abastecimiento </h1>
      </div>

      <table className='vca-table'>
        <thead>
          <tr>
            <th colSpan="2">a. Identificación de la fuente de abastecimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">Si además del suministro de agua por parte del acueducto; usted recolecta, almacena y usa aguas lluvias, adicione este en una celda adicional.</td>
          </tr>
          <tr>
            <td>Fuente</td>
            <td>Proveedor</td>
          </tr>
          <tr>
            <td>
              <select value={proveedor1} onChange={handleProveedor1Change} className='vca-select'>
                <option value="">Seleccione una opción</option>
                <option value="suministrado_por_aguas_de_cartagena">Sistema de acueducto</option>
                <option value="agua_lluvia">Agua lluvia</option>
                <option value="otra_fuente">Otra fuente</option>
              </select>
            </td>
            <td>
              {proveedor1 === 'suministrado_por_aguas_de_cartagena' && 'Suministrado por Aguas de Cartagena'}
              {proveedor1 === 'agua_lluvia' && '-'}
              {proveedor1 === 'otra_fuente' && '#N/A'}
            </td>
          </tr>
          <tr>
            <td>
              <select value={proveedor2} onChange={handleProveedor2Change} className='vca-select'>
                <option value="">Seleccione una opción</option>
                <option value="suministrado_por_aguas_de_cartagena">Sistema de acueducto</option>
                <option value="agua_lluvia">Agua lluvia</option>
                <option value="otra_fuente">Otra fuente</option>
              </select>
            </td>
            <td>
              {proveedor2 === 'suministrado_por_aguas_de_cartagena' && 'Suministrado por Aguas de Cartagena'}
              {proveedor2 === 'agua_lluvia' && '-'}
              {proveedor2 === 'otra_fuente' && 'Describa la fuente'}
            </td>
          </tr>
        </tbody>
      </table>

      <table className='vca-table'>
        <thead>
          <tr>
            <th colSpan="2">b. Verificación de programación de suspensiones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consultar</td>
            <td>
              <table className='nested-table'>
                <tbody>
                  <tr>
                    <td><a href="https://www.acuacar.com/Noticias/Boletines-de-prensa" target="_blank">https://www.acuacar.com/Noticias/Boletines-de-prensa</a></td>
                  </tr>
                  <tr>
                    <td><a href="https://www.acuacar.com/Noticias/Mantenimientos-Red-Acueducto" target="_blank">https://www.acuacar.com/Noticias/Mantenimientos-Red-Acueducto</a></td>
                  </tr>
                  <tr>
                    <td><a href="#https://apps.apple.com/co/app/acuacar/id1465004808?|=en" target="_blank">https://apps.apple.com/co/app/acuacar/id1465004808?|=en</a></td>
                  </tr>
                  <tr>
                    <td><a href="https://play.google.com/store/apps/details?id=com.acuacar.Acuacar&h%7C=es_CO&gl=US&pli=1" target="_blank">https://play.google.com/store/apps/details?id=com.acuacar.Acuacar&h%7C=es_CO&gl=US&pli=1</a></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <table className='vca-table'>
        <thead>
          <tr>
            <th colSpan="2">Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">
              <textarea className='observations-textarea' rows="4" placeholder="Escribe tus observaciones aquí..."></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Vca;