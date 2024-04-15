import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import ScreenSplitPage from '../pages/pattern/screen-split'
import FunctionAsChildrenPage from '../pages/pattern/function-as-children'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/screensplit' element={<ScreenSplitPage />} />
      <Route path='/funcAsChildren' element={<FunctionAsChildrenPage />} />
    </Routes>
  )
}
