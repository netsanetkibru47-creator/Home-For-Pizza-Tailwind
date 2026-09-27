const Nav = () => {
  return (
    <div>
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-center items-center gap-4 py-6">
         <li><Link to="/">Home</Link></li>
         <li><Link to="/recipe">Recipe</Link></li>
         <li><Link to="/add-recipe">Add Recipe</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav;