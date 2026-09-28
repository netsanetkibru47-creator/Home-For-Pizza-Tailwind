import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <header className='bg-gray-900 text-white shadow-md w-full'>
      <nav className=" px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-8 rounded-2xl border border-amber-600 ">
            <h1 className="text-xl font-bold tracking-tight text-white">
                🍕Netsi's Pizza Recipe
            </h1>
            <ul className="flex items-center gap-6 font-medium text-gray-300">
         <li>
            <Link to="/" className='className="hover:text-orange-400 transition-colors"'>Home</Link>
        </li>
         <li>
            <Link to="/recipe" className="hover:text-orange-400 transition-colors">Recipe</Link>
         </li>
         <li>
            <Link to="/addRecipe" className="hover:text-orange-400 transition-colors">AddRecipe</Link>
         </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;