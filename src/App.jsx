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

      <div ref={faqSectionRef}  className={` scroll-mt-20 flex items-center justify-center mx-auto w-full py-16 px-4 border-t transition-colors duration-200 ${
      darkMode ? 'bg-gray-1000/40 border-gray-900' : 'bg-orange-80/20 border-orange-80'
    }`} >
        <div className={` p-5 h-140 w-130 rounded-2xl border text-sm animate-fadeIn transition-all shadow-inner ${
                darkMode ? 'bg-slate-900 border-orange-900/60 text-gray-100' : 'bg-orange-50/40 border-orange-200 text-gray-800 py-16 px-4'
              }`}>
          <h1 className=' text-center font-bold text-orange-500 text-[50px] mb-2 uppercase tracking-wide '>FAQ</h1>
          <p className='text-[25px]'>1.What is casa pizza recipe</p>
          <p>A platform to discover and share delicious pizza recipes. The name casa comes from italy since pizza is italians favorite food.</p>
          <p className='text-[25px]'>2. How can I find a pizza recipe?</p>
          <p>Browse our recipe collection to find your favorite pizza.</p>
          <p className='text-[25px]'>3. Can I submit my own pizza recipe?</p>
          <p>Yes! Click the Add Recipe page to share your recipe.</p>
          <p className='text-[25px]'>4. What should I include when submitting a recipe?</p>
          <p>Include the recipe name, ingredients, instructions, and cooking time.</p>
          <p className='text-[25px]'>5. Can I find vegetarian pizza recipes?</p>
          <p>Yes! Discover delicious vegetarian pizza recipes.</p>
          <p className='text-[25px]'>6. Is the platform free to use?</p>
          <p>Yes! Exploring our pizza recipes is free.</p>

        </div>
      </div>


      <div ref={ratingSectionRef}  className={` scroll-mt-20 w-full py-16 px-4 border-t transition-colors duration-200 ${
      darkMode ? 'bg-gray-700/40 border-gray-600' : 'bg-orange-40/20 border-orange-70'
    }`}>
        <h2 className="text-3xl font-bold text-orange-500 text-center">
           Rate Your Experience ⭐
        </h2>
        <p className="text-center mt-3">
          Enjoyed our pizza recipes? Rate your experience and help us improve!
        </p>

        <div className="py-12 px-6 text-center">

  <h2 className="text-3xl font-bold text-orange-500 mb-3">
    ⭐ Rate Your Experience
  </h2>

  <p className="text-gray-500 mb-6">
    How much do you love our pizza recipes?
    Share your rating with us!
  </p>

  <div className="flex justify-center gap-3 text-4xl mb-6">
    <button className="hover:scale-125 transition">⭐</button>
    <button className="hover:scale-125 transition">⭐</button>
    <button className="hover:scale-125 transition">⭐</button>
    <button className="hover:scale-125 transition">⭐</button>
    <button className="hover:scale-125 transition">⭐</button>
  </div>

  <textarea
    placeholder="Share your feedback..."
    className="w-full max-w-lg p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
    rows="3"
  />

  <div>
    <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition">
      Submit Rating
    </button>
  </div>

</div>

      </div>

      <div ref={registerSectionRef} className="scroll-mt-20">
        <AddRecipe darkMode={darkMode} />
      </div>

      <Footer />

    </div>
  );
}

export default App;
