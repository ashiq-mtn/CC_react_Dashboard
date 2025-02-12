import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import SignUp from './SignUp'
import SignIn from './SignIn'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
