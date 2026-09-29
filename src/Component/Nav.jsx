const Nav = ({ 
  darkMode, 
  setDarkMode, 
  scrollToHome, 
  scrollToRecipes, 
  scrollToFAQ, 
  scrollToRatings, 
  scrollToRegister 
}) => {
  return (
    <header className={`sticky top-0 z-50 w-full px-6 py-2 shadow-md transition-colors duration-200 ${
      darkMode ? 'bg-gray-900 border-b border-gray-800' : 'bg-white border-b border-gray-100'
    }`}>
      <nav className="flex items-center justify-between gap-6 max-w-7xl mx-auto px-2 py-3">

        {/* Logo + Dark Mode Button */}
        <div className="flex items-center gap-5">
          <h1 
            onClick={scrollToHome} 
            className={`text-2xl font-extrabold tracking-wide cursor-pointer transition-transform active:scale-95 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            🍕 Netsi's Pizza Recipe
          </h1>
        </div>

        {/* Scroll Navigation Controls */}
        <ul className={`flex gap-6 font-semibold text-sm items-center ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          <li>
            <button onClick={scrollToHome} className="transition-colors hover:text-orange-500 cursor-pointer">
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={scrollToRecipes} 
              className="transition-colors  bg-orange-500 text-white px-3.5 py-1.5 rounded-xl font-bold shadow-xs hover:bg-orange-600 cursor-pointer"
            >
              Recipes
            </button>
          </li>
          <li>
            <button onClick={scrollToFAQ} className="transition-colors hover:text-orange-500 cursor-pointer">
              FAQ
            </button>
          </li>
          <li>
            <button onClick={scrollToRatings} className="transition-colors hover:text-orange-500 cursor-pointer">
              Ratings
            </button>
          </li>
          <li>
            <button onClick={scrollToRegister} className="transition-colors hover:text-orange-500 cursor-pointer">
              Add Recipe
            </button>
          </li>
          <li>
            <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              darkMode ? 'bg-gray-800 border-gray-700 text-yellow-400' : 'bg-gray-50 border-gray-200 text-gray-700'
            }`}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Nav;