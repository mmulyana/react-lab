import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import ScreenSplitPage from '../pages/pattern/screen-split'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}
