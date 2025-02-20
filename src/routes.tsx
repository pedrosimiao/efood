import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

const RouteTrack = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Profile />} />
    <Route path="/checkout" element={<Profile />} />
  </Routes>
)

export default RouteTrack
