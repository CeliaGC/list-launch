
//PINTAR UNA LISTA DE USUARIOS EN LA WEB

//Yo como usuario quiero generar una lista de participantes en un evento
//Yo como usuario quiero un campo donde escribir un nombre
//Yo como ususario quiero un botón que añada el el nombre a una lista
//Yo como usuario quiero ver una lista numerada con los participantes que voy añadiendo

// Manejo de eventos: onchange
// Hooks: useState
// Métodos: .map()

//Yo como usuario quiero generar una lista de participantes en un evento
//Yo como usuario quiero dos campos de formulario donde añadir los datos "Nombre" y "Apellido" 
//Yo como usuario quiero un botón que añada los datos del formulario a una lista
//Yo como usuario quiero ver la lista de participantes numerada

import React, { useState } from 'react';


const UserList= () => {

  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState('');

const handleUserChange = (e) => {
    setUser([e.target.value]);
};

  const handleAddUser = () => {

    setUserList([...userList, ...user]);

    setUser('')
  };

  return (

<div>
    <input type="text" name= "user" value={user} onChange={handleUserChange} />
    <button onClick={handleAddUser}>Add User</button>      
    <ul>
        {userList.map((user,index) => (
          <li key={index}>
            {user}
          </li>
        ))}
      </ul>
</div>
      
  );
};

export default UserList;