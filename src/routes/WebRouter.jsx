import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import SignINAE from '../pages/SignINAE/SignINAE'
import ToolsGra from '../pages/ToolsGra/ToolsGra'
import Vca from '../pages/Vca/Vca'
import Esctaa from '../pages/Esctaa/Esctaa'
import Diagnosis from '../pages/Diagnosis/Diagnosis'
import UserPortal from '../pages/UserPortal/UserPortal'
import SignUP from '../pages/SignUP/SignUP'

export function WebRouter() {
  return (
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signINAcuacarEmployee' element={<SignINAE />} />
            <Route path='/signUP' element={<SignUP />} />
            <Route path='/UserPortal' element={<UserPortal />} />
            <Route path='/toolsGra' element={<ToolsGra />} />
            <Route path='/vca' element={<Vca />} />
            <Route path='/esctaa' element={<Esctaa />} />
            <Route path='/diagnosis' element={<Diagnosis />} />
      </Routes>
  )
}
