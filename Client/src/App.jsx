import {Routes , Route, useNavigate} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Main from './Pages/Main'
import { useEffect } from 'react'

function App() {

  const navigate = useNavigate()


  useEffect(()=>{
    const sendRoute = ()=>{
      const existe = localStorage.getItem('user')
      console.log(existe)
      if(!existe){
        navigate('/login')
      }else{
        navigate('/Home')
      }


    }
    sendRoute()
  },[])

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/*' element={<Main/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App
