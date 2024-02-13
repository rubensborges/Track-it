import { useState } from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'

import Login from './components/login'
import Cadastro from './components/cadastro'
import UserContext from './contexts'
import Hoje from './components/hoje'
import Habitos from './components/habitos'

function App() {
  const [userData, setUserData] = useState([]);
  const [diaSelecionado, setDiaSelecionado] = useState([])


  return (
    <UserContext.Provider value={{userData, setUserData, diaSelecionado, setDiaSelecionado}}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/hoje" element={<Hoje />} />
            <Route path="/habitos" element={<Habitos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  )
}

export default App










