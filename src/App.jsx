import './App.css';
import { Routes, Route } from 'react-router-dom';
import LayoutTop from './LayoutTop';
import Home from './Pages/Home';
import Recipe from './Pages/Recipe';
import AddRecipe from './Pages/AddRecipe';

function App() {
  return (
    <Routes>
      {/* 1. Parent Layout Route wraps your application */}
      <Route element={<LayoutTop />}>
        {/* 2. All child routes render inside the parent layout structure */}
        <Route path="/" element={<Home />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/AddRecipe" element={<AddRecipe />} />
      </Route>
    </Routes>
  );
}

export default App;
