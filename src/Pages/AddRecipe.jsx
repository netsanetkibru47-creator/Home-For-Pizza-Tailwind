import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('Dinner');
  const [servings, setServings] = useState('');
  const [time, setTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setError('Please give your recipe a name.');
      return;
    }
    if (Number(servings) <= 0) {
      setError('Servings must be greater than zero.');
      return;
    }

    setError('');
    console.log({ name, category, servings, time, ingredients, steps });

    alert(`"${name}" added! (Check the console to see the data.)`);
    navigate('/');
  }

  // Shared utility style string
  const inputStyle = "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all bg-white text-gray-900";

  return (
    <main className="max-w-xl mx-auto w-full px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 tracking-tight">Add a Recipe</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-5">
        <div>
          <label htmlFor="name" className='block text-sm font-semibold text-gray-700'>Recipe name</label>
          <input
            id="name"
            type="text"
            className={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. BBQ Chicken Pizza"
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label htmlFor="category" className='block text-sm font-semibold text-gray-700'>Category</label>
            <select
              id="category"
              className={inputStyle}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Dinner</option>
              <option>Lunch</option>
              <option>Snack</option>
              <option>Party</option>
            </select>
          </div>

          <div>
            <label htmlFor="servings" className='block text-sm font-semibold text-gray-700'>Servings</label>
            <input
              id="servings"
              type="number"
              min="1"
              className={inputStyle} // 👈 FIXED: Changed inputStyles to inputStyle
              value={servings}
              onChange={(e) => setServings(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="time" className='block text-sm font-semibold text-gray-700'>Preparation time</label>
          <input
            id="time"
            type="text"
            className={inputStyle}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="e.g. 45 minutes"
          />
        </div>

        <div>
          <label htmlFor="ingredients" className='block text-sm font-semibold text-gray-700'>Ingredients (one per line)</label>
          <textarea
            id="ingredients"
            rows="5"
            className={inputStyle}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder={'1/2 cup cheese\n1 tsp oregano'}
          />
        </div>

        <div>
          <label htmlFor="steps" className='block text-sm font-semibold text-gray-700'>Preparation steps (one per line)</label>
          <textarea
            id="steps"
            rows="5"
            className={inputStyle}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder={'Preheat the oven...\nRoll out the dough...'}
          />
        </div>

        {error && <p className="text-sm font-medium text-red-600 bg-red-50 p-2 rounded-md border border-red-200">{error}</p>}

        <button 
          type="submit" 
          className="w-full py-2.5 px-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-md shadow-md cursor-pointer transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Add Recipe
        </button>
      </form>
    </main>
  );
}

export default AddRecipe;