import { Link } from 'react-router-dom';

function Recipe() {
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

      <main className="recipe-detail">
        <div id="veg">
          <h1>Veg Cheese Pizza</h1>
          <div className="image-container">
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/veg_cheese_pizza.webp"
            alt="A veg pizza"
            width="200"
          />
          


          <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1/2 cup cheese</li>
            <li>3 tbsp butter</li>
            <li>1 tbsp maida</li>
            <li>1/4 cup milk</li>
            <li>salt</li>
            <li>Black pepper</li>
            <li>1/2 cup baby corn</li>
            <li>1/2 cup carrot</li>
            <li>1/2 cup mozzarella cheese</li>
            <li>1/2 cup pizza sauce</li>
          </ul>
          </div>

          </div>


   
          <h2>Preparation steps</h2>
          <ol>
            <li>Divide the cheese sauce into 2 portions.</li>
            <li>
              Heat 1 tbsp butter and saute the diced baby corn, carrot,
              zucchini, and <br /> red capsicum for 2-3 minutes; season with
              salt and pepper.
            </li>
            <li>Divide the vegetables into 2 portions.</li>
            <li>
              Place a pizza base on a clean surface and spread cheese sauce
              over it.
            </li>
            <li>
              Add the vegetables, then drizzle 1/4 cup pizza sauce and
              sprinkle 1/4 cup grated mozzarella.
            </li>
            <li>
              Place the pizzas on a greased baking tray and bake for 10-12
              minutes, until golden and crispy.
            </li>
          </ol>

          <table>
            <tbody>
              <tr>
                <th>Category</th>
                <td>Dinner</td>
              </tr>
              <tr>
                <th>Serving</th>
                <td>6</td>
              </tr>
              <tr>
                <th>Preparation Time</th>
                <td>1 hr</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="pepperoni">
          <h1>Pepperoni pizza</h1>
          <img src="/images/pepperoni pizza.png" alt="pepperoni pizza" width="100" />

          <h2>Ingredients</h2>
          <ul>
            <li>16 ounces pizza dough (store-bought or homemade)</li>
            <li>1/2 cup pizza or tomato sauce</li>
            <li>12 ounces mozzarella cheese, grated</li>
            <li>18 to 20 slices pepperoni</li>
            <li>1 teaspoon olive oil</li>
            <li>Flour for rolling the dough</li>
          </ul>

          <h2>Preparation steps</h2>
          <ol>
            <li>
              Preheat the oven: turn it to a high heat setting, around 450°F
              to 500°F (230°C to 260°C), and let it heat up completely.
            </li>
            <li>
              Shape the dough: dust a clean surface with flour. Gently
              stretch or roll out your pizza dough into a 12-to-14-inch
              round circle and place it on a lined baking tray or pizza pan.
            </li>
            <li>
              Add toppings: brush the edge of the dough lightly with olive
              oil. Spread the pizza sauce evenly across the center, leaving
              a small border for the crust. Cover the sauce with grated
              mozzarella cheese, then arrange the pepperoni slices evenly on
              top.
            </li>
            <li>
              Bake: place the pizza in the hot oven and bake for 10 to 12
              minutes, or until the crust is golden brown and the cheese is
              bubbly and lightly browned.
            </li>
            <li>Slice and serve: let it cool for a few minutes before cutting into slices.</li>
          </ol>

          <table>
            <tbody>
              <tr>
                <th>Category</th>
                <td>Dinner</td>
              </tr>
              <tr>
                <th>Serving</th>
                <td>4</td>
              </tr>
              <tr>
                <th>Preparation Time</th>
                <td>40 minute</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Link to="/">To home</Link>

      <footer>&lt;&lt;&lt; &copy; Pizza recipe platform &gt;&gt;&gt;</footer>
    </>
  )
}

export default Recipe;