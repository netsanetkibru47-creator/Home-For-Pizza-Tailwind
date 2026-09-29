import React, { useState } from 'react';

function AddRecipe({ darkMode }) {
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
    alert(`"${name}" added successfully! Check your console tool for details.`);

    // Clear form fields
    setName('');
    setServings('');
    setTime('');
    setIngredients('');
    setSteps('');
  }

  const inputStyle = `w-full mt-1 px-3 py-2 border rounded-md shadow-xs focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
    darkMode 
      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
  }`;

  const labelStyle = `block text-sm font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`;

  return (
    <section className={`w-full py-16 px-4 border-t transition-colors duration-200 ${
      darkMode ? 'bg-gray-900/40 border-gray-800' : 'bg-orange-50/20 border-orange-100'
    }`}>
      <div className="max-w-xl mx-auto">
        <h2 className={`text-3xl font-black text-center tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Register a Recipe
        </h2>

        <form onSubmit={handleSubmit} className={`mt-8 p-6 border rounded-xl shadow-md space-y-5 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div>
            <label htmlFor="name" className={labelStyle}>Recipe name</label>
            <input id="name" type="text" className={inputStyle} value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. BBQ Chicken Pizza" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className={labelStyle}>Category</label>
              <select id="category" className={inputStyle} value={category} onChange={(e) => setCategory(e.target.value)}>
                <option className={darkMode ? 'bg-gray-800' : 'bg-white'}>Dinner</option>
                <option className={darkMode ? 'bg-gray-800' : 'bg-white'}>Lunch</option>
                <option className={darkMode ? 'bg-gray-800' : 'bg-white'}>Snack</option>
                <option className={darkMode ? 'bg-gray-800' : 'bg-white'}>Party</option>
              </select>
            </div>

            <div>
              <label htmlFor="servings" className={labelStyle}>Servings</label>
              <input id="servings" type="number" min="1" className={inputStyle} value={servings} onChange={(e) => setServings(e.target.value)} />
            </div>
          </div>

          <div>
            <label htmlFor="time" className={labelStyle}>Preparation time</label>
            <input id="time" type="text" className={inputStyle} value={time} onChange={(e) => setTime(e.target.value)} placeholder="e.g. 45 minutes" />
          </div>

          <div>
            <label htmlFor="ingredients" className={labelStyle}>Ingredients (one per line)</label>
            <textarea id="ingredients" rows="4" className={inputStyle} value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder={'1/2 cup cheese\n1 tsp oregano'} />
          </div>

          <div>
            <label htmlFor="steps" className={labelStyle}>Preparation steps (one per line)</label>
            <textarea id="steps" rows="4" className={inputStyle} value={steps} onChange={(e) => setSteps(e.target.value)} placeholder={'Preheat oven...\nRoll out dough...'} />
          </div>

          {error && (
            <p className={`text-sm font-medium p-2 rounded-md border ${
              darkMode ? 'bg-red-950/40 border-red-900 text-red-400' : 'bg-red-50 border-red-200 text-red-600'
            }`}>
              {error}
            </p>
          )}

          <button type="submit" className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-md cursor-pointer transition-colors duration-200 uppercase tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
            🚀 Submit Recipe
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddRecipe;

