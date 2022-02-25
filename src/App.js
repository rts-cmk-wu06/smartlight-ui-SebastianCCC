//importy packages
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//import templates
import Main from './Templates/Main'
import Topview from './Templates/Topview'
import Navbar from './Templates/Nav'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Topview />
        <Routes>
          <Route path="/home/" element={<Main />}>
            <Route path=":roomid" />
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default App
