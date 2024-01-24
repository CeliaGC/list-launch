// import './form.css'

// function Form(){
//     return (
        
//         <form id="dataForm">

//             <div id ="sendBt" class="dataFields">
//                 <button id="sendData" >SEND</button>
//             </div>


// <div id= "data" class="dataFields">

//     <label for="inName">NOMBRE</label>
//     <input type="text" name="inName" id="inNamerl"></input>

//     <label for="inSur1">APELLIDO1</label>
//     <input type="text" id="inSur1" name="inSur1"></input>

//     <label for="inSur2">APELLIDO2</label>

//     <input type="text" id="inSur2" name="inSur2"></input>

//     <label for="inGrade">CURSO</label>
//     <input type="text" id="inGrade" name="inGrade"></input>

// </div>


// </form>


    
        
//     )
// }

// export default Form;

// src/components/Formulario.js
import React, { useState } from 'react';
// import axios from 'axios'; 
// Asegúrate de tener Axios instalado: npm install axios

const ListAdmin= () => {
  const [formData, setFormData] = useState({
    inName: '',
    inSur1: '',
    inSur2: '',
    inGrade: '',
  });

  const [userList, setUserList] = useState([]);
  const [listName, setListName] = useState('');

  
  const [list, setList] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleListNameChange = (e) => {
    setListName(e.target.value);
  };

  const handleAddUser = () => {
    // Agrega el usuario actual a la lista
    setUserList([...userList, { ...formData }]);
    // Resetea el formulario
    setFormData({
      inName: '',
      inSur1: '',
      inSur2: '',
      inGrade: '',
    });
  };

//   const handleSaveList = async () => {
    const handleSaveList = () => {
        setList(
            {eventName: listName,
            participants: userList}
        )
    // Aquí puedes enviar la lista completa a tu API falsa usando Axios
    // Asegúrate de tener Axios instalado: npm install axios

    // Ejemplo de cómo enviar datos usando Axios:
    /*
    try {
      const response = await axios.post('http://localhost:3001/tuEndpoint', {
        listName: listName,
        users: userList,
      });
      console.log('Respuesta de la API:', response.data);
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
    */

    // Limpia la lista después de guardarla
    // setUserList([]);
    // setListName('');
  };

  return (
    <div>
      <h2>List Name:</h2>
      <input type="text" value={listName} onChange={handleListNameChange} />

      <form>
        {/* Agrega tus campos de formulario aquí */}
        <label htmlFor="inName">NOMBRE</label>
        <input type="text" name="inName" id="inName" value={formData.inName} onChange={handleChange} />

        <label htmlFor="inSur1">Apellido1</label>
        <input type="text" name="inSur1" id="inSur1" value={formData.inSur1} onChange={handleChange} />

        <label htmlFor="inSur2">Apellido2</label>
        <input type="text" name="inSur2" id="inSur2" value={formData.inSur2} onChange={handleChange} />

        <label htmlFor="inGrade">Curso</label>
        <input type="text" name="inGrade" id="inGrade" value={formData.inGrade} onChange={handleChange} />
        {/* Agrega los demás campos de formulario de manera similar */}
      </form>

      <button onClick={handleAddUser}>Add User</button>

      {/* Mostrar la lista actual de usuarios */}
      <h2>User List:</h2>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            {user.inName} {user.inSur1} {user.inSur2} {user.inGrade}
          </li>
        ))}
      </ul>

      <button onClick={handleSaveList}>Save List</button>
    </div>
  );
};

export default ListAdmin;