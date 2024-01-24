
//PINTAR UNA LISTA DE USUARIOS EN LA WEB

// Manejo de eventos: onchange
// Hooks: useState
// Métodos: .map()

//Yo como usuario quiero generar una lista de participantes en un evento
//Yo como usuario quiero campos de formulario donde añadir los datos del participante
//Yo como usuario quiero un botón que añada los datos del formulario a una lista
//Yo como usuario quiero un campo de formulario para añadir el dato "Nombre del evento"
//Yo como usuario quiero un botón que guarde la lista de participantes con el nombre del evento
//Yo como usuario quiero ver la lista de participantes numerada y con su título


import React, { useState } from 'react';


const ListAdmin= () => {
  const [formData, setFormData] = useState({
    userName: '',
    userSurnameA: '',
    userSurnameB: '',
    userGrade: '',
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

    setUserList([...userList, { ...formData }]);

    setFormData({
      userName: '',
      userSurnameA: '',
      userSurnameB: '',
      userGrade: '',
    });
  };

    const handleSaveList = () => {
        setList(
            {eventName: listName,
            participants: userList}
        )
  };

  return (
    <div>
      <h2>List Name:</h2>
      <input type="text" value={listName} onChange={handleListNameChange} />

      <form>
      
        <label htmlFor="userName">NOMBRE</label>
        <input type="text" name="userName" id="userName" value={formData.userName} onChange={handleChange} />

        <label htmlFor="userSurnameA">Apellido1</label>
        <input type="text" name="userSurnameA" id="userSurnameA" value={formData.userSurnameA} onChange={handleChange} />

        <label htmlFor="userSurNameB">Apellido2</label>
        <input type="text" name="userSurNameB" id="userSurNameB" value={formData.userSurNameB} onChange={handleChange} />

        <label htmlFor="userGrade">Curso</label>
        <input type="text" name="userGrade" id="userGrade" value={formData.userGrade} onChange={handleChange} />

      </form>

      <button onClick={handleAddUser}>Add User</button>

      <h2>User List:</h2>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            {user.userName} {user.userSurnameA} {user.userSurnameB} {user.userGrade}
          </li>
        ))}
      </ul>

      <button onClick={handleSaveList}>Save List</button>
    </div>
  );
};

export default ListAdmin;
