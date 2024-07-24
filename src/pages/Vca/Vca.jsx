import NavBar from '../../components/NavBar/NavBar';
import BackButton from '../../components/BackButton/BackButton';
import { useState, useEffect } from 'react';
import { IdentificacionFuente } from '../../../api/identificacionDeLaFuente';
import { Auth } from '../../../api/auth';

import './Vca.scss';

function Vca() {

  const userController = new IdentificacionFuente();
  const authController = new Auth();

  const [formData, setFormData] = useState({
    fuente: null,
    proveedor: null,
    observaciones: null,
    iduser: null
  });

  useEffect(() => {
    (async () => {
      try {
        const userDataString = await authController.getDataUser();
        if (!userDataString) throw new Error("User data not found");

        const userData = JSON.parse(userDataString);
        const idMe = userData?._id;
        if (!idMe) throw new Error("User ID not found");

        setFormData(prevData => ({ ...prevData, iduser: idMe }));
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data");
      }
    })();
  }, []);

  const handleFirstFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await userController.postIdentificacionFuente(formData);
      if (!response) throw new Error("Failed to submit form");
      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  const handleChange = (e) => {
    const data = { ...formData, [e.target.name]: e.target.value };
    setFormData(data);
  }

  const handleFuenteChange = (event) => {
    const fuente = event.target.value;
    let proveedor = '';

    if (fuente === 'suministrado_por_aguas_de_cartagena') {
      proveedor = 'Suministrado por Aguas de Cartagena';
    } else if (fuente === 'agua_lluvia') {
      proveedor = '-';
    } else if (fuente === 'otra_fuente') {
      proveedor = 'Describa la fuente';
    }

    setFormData({ ...formData, fuente, proveedor });
  };

  return (
    <div className='vca-container'>
      <NavBar leftChildren={<BackButton />} />
      <div className='title_tools'>
        <h1>1.1. Verificación de las condiciones de abastecimiento </h1>
      </div>

      <form onSubmit={handleFirstFormSubmit}>
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
                <select value={formData.fuente} onChange={handleFuenteChange} className='vca-select'>
                  <option value="">Seleccione una opción</option>
                  <option value="suministrado_por_aguas_de_cartagena">Sistema de acueducto</option>
                  <option value="agua_lluvia">Agua lluvia</option>
                  <option value="otra_fuente">Otra fuente</option>
                </select>
              </td>
              <td>
                {formData.proveedor}
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
                <textarea
                  className='observations-textarea'
                  rows="4"
                  placeholder="Escribe tus observaciones aquí..."
                  name="observaciones"
                  onChange={handleChange}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Vca;
