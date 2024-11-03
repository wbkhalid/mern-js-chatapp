import { Navigate, Route, Routes } from 'react-router-dom'
import Chat from './pages/chat'
import Auth from './pages/auth'
import Profile from './pages/profile'

const App = () => {
  return (
    <Routes>
      <Route path='/chat' element={<Chat />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<Navigate to='/auth' />} />
    </Routes>
  )
}

export default App
