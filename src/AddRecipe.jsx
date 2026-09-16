import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AddRecipe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [category, setCategory] = useState('Dinner')
  const [servings, setServings] = useState('')
  const [time, setTime] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!name.trim()) {
      setError('Please give your recipe a name.')
      return
    }
    if (Number(servings) <= 0) {
      setError('Servings must be greater than zero.')
      return
    }

    setError('')
    console.log({ name, category, servings, time, ingredients, steps })

    alert(`"${name}" added! (Check the console to see the data.)`)
    navigate('/')
  }

  return (
    <>
      <header className="site-header">
        <h1>Netsi's Pizza Recipe</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/recipe">Recipe</Link>
          <Link to="/add-recipe">Add Recipe</Link>
        </nav>
      </header>

      <main className="add-recipe">
        <h1>Add a Recipe</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Recipe name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. BBQ Chicken Pizza"
            />
          </div>

          <div>
            <label htmlFor="category">Category</label>
            <select
              id="category"
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
            <label htmlFor="servings">Servings</label>
            <input
              id="servings"
              type="number"
              min="1"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="time">Preparation time</label>
            <input
              id="time"
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="e.g. 45 minutes"
            />
          </div>

          <div>
            <label htmlFor="ingredients">Ingredients (one per line)</label>
            <textarea
              id="ingredients"
              rows="5"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder={'1/2 cup cheese\n1 tsp oregano'}
            />
          </div>

          <div>
            <label htmlFor="steps">Preparation steps (one per line)</label>
            <textarea
              id="steps"
              rows="5"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder={'Preheat the oven...\nRoll out the dough...'}
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <input type="submit" value="Add Recipe" />
        </form>
      </main>

      <footer>&lt;&lt;&lt; &copy; Pizza recipe platform &gt;&gt;&gt;</footer>
    </>
  )
}

export default AddRecipe;