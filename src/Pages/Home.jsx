function Home({ darkMode, scrollToRecipes }) {
  return (
    <div className="w-full">
      {/* Hero Welcome Header Section */}
      <section className={`py-20 px-6 text-center shadow-inner transition-all duration-200 ${
        darkMode ? 'bg-linear-to-r from-gray-800 to-slate-800 text-indigo-50' : 'bg-linear-to-r from-amber-100 to-amber-500 text-black'
      }`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Simple, Delicious Pizza Recipes</h1>
          <p className="text-lg md:text-xl font-medium leading-relaxed drop-shadow-xs mb-8">
            Welcome, this is a small home for simple, delicious pizza recipes. Each recipe lists what you need, what to do and how long it takes. Browse the collection below, or add a recipe of your own.
          </p>
          
          <button 
            onClick={scrollToRecipes}
            className="px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-md transform hover:-translate-y-0.5 transition-all cursor-pointer uppercase tracking-wider text-sm"
          >
            Explore Recipes/ 👇
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;

