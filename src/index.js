//import packages
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//import tailwind
import './css/tailwind.css'

//import a reset style sheet
import './css/reset.css'

//import components
import Home from './Pages/Home'

//import StateProvider
import { StateProvider } from './hooks/stateContext'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <BrowserRouter>
        <div className="w-[375px] bg-darkblue">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
