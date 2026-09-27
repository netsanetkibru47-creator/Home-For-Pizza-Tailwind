import './App.css';
import { Routes, Route } from 'react-router-dom';
import LayoutTop from './LayoutTop';
import Home from './Home';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';

function App() {
  return (
    <Routes>
      <Route element={<LayoutTop />} />
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/add-recipe" element={<AddRecipe />} />
    </Routes>
  )
}

export default App;
