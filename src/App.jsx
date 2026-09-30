import './App.css';
import { useState, useRef } from 'react';
import Nav from './Component/Nav'; // 1. Changed import to Nav
import Home from './Pages/Home';
import Recipe from './Pages/Recipe';
import AddRecipe from './Pages/AddRecipe';
import Footer from './Component/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const homeRef = useRef(null);
  const recipeSectionRef = useRef(null);
  const registerSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const ratingSectionRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      
      {/* 2. Swapped LayoutTop out and wired up your Nav functions */}
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrollToHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        scrollToRecipes={() => scrollToSection(recipeSectionRef)}
        scrollToRegister={() => scrollToSection(registerSectionRef)}
        scrollToFAQ={() => scrollToSection(faqSectionRef)}
        scrollToRatings={() => scrollToSection(ratingSectionRef)}
      />

      {/* Single-Page Layout Blocks */}
      <div ref={homeRef}>
        <Home darkMode={darkMode} scrollToRecipes={() => scrollToSection(recipeSectionRef)} />
      </div>

      <div ref={recipeSectionRef} className="scroll-mt-20">
        <Recipe darkMode={darkMode} />
      </div>

      <div ref={faqSectionRef} className="scroll-mt-20">
        {/* ... FAQ markup content ... */}
      </div>

      <div ref={ratingSectionRef} className="scroll-mt-20">
        {/* ... Ratings markup content ... */}
      </div>

      <div ref={registerSectionRef} className="scroll-mt-20">
        <AddRecipe darkMode={darkMode} />
      </div>

      <Footer />

    </div>
  );
}

export default App;
