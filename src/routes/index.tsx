import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import UserList from '../pages/UserList'

const index = () => {
  return (
    <div>
       <Routes>
        <Route path='/create' element={<Login/>}/>
        <Route path='/' element={<UserList/>}/>
       </Routes>
    </div>
  )
}

export default index
