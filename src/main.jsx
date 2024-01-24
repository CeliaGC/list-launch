import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import  ListAdmin  from './views/ListAdmin'
import UserList from './views/UserList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <ListAdmin/> */}
  <UserList/>
  </React.StrictMode>,
)
