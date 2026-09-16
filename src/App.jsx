import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Recipe from './Recipe'
import AddRecipe from './AddRecipe'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/add-recipe" element={<AddRecipe />} />
    </Routes>
  )
}

export default App;
