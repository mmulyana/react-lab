import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import ScreenSplitPage from '../pages/pattern/screen-split'
import FunctionAsChildrenPage from '../pages/pattern/function-as-children'
import FilterDebouncePage from '../pages/hooks/filter-debounce'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pattern/screensplit' element={<ScreenSplitPage />} />
      <Route
        path='/pattern/funcAsChildren'
        element={<FunctionAsChildrenPage />}
      />
      <Route path='/hooks/debounce-filter' element={<FilterDebouncePage />} />
    </Routes>
  )
}
