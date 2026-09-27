import { Link } from 'react-router-dom';

function Recipe() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 flex flex-col justify-between">
      <main className="max-w-3xl mx-auto w-full py-12 px-4 space-y-16">
        
        {/* ================= VEG CHEESE PIZZA SECTION ================= */}
        <div id="veg" className="scroll-mt-24 border-b border-gray-100 pb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 border-l-4 border-orange-500 pl-3 mb-6">
            Veg Cheese Pizza
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
            <img
              src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/veg_cheese_pizza.webp"
              alt="A veg pizza"
              className="w-52 h-52 object-cover rounded-lg shadow-sm border border-gray-100"
            />
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200/60 w-full md:w-auto min-w-70">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-1.5 mb-3 flex items-center gap-1">
                🛒 Ingredients
              </h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
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

          <h2 className="text-lg font-bold text-gray-900 mb-3">Preparation steps</h2>
          <ol className="list-decimal list-inside space-y-2.5 text-sm text-gray-600 mb-6 bg-orange-50/30 border border-orange-100/50 p-4 rounded-lg">
            <li>Divide the cheese sauce into 2 portions.</li>
            <li>
              Heat 1 tbsp butter and saute the diced baby corn, carrot,
              zucchini, and <br className="hidden md:inline" /> red capsicum for 2-3 minutes; season with
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

          <table className="w-full max-w-xs text-sm border border-gray-200 rounded-md overflow-hidden">
            <tbody>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left font-semibold text-gray-700 px-4 py-2 border-r border-gray-200">Category</th>
                <td className="px-4 py-2 text-gray-600">Dinner</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="text-left font-semibold text-gray-700 px-4 py-2 border-r border-gray-200">Serving</th>
                <td className="px-4 py-2 text-gray-600">6</td>
              </tr>
              <tr className="bg-gray-50">
                <th className="text-left font-semibold text-gray-700 px-4 py-2 border-r border-gray-200">Preparation Time</th>
                <td className="px-4 py-2 text-gray-600">1 hr</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= PEPPERONI PIZZA SECTION ================= */}
        <div id="pepperoni" className="scroll-mt-24 pt-4">
          <h1 className="text-3xl font-extrabold text-gray-900 border-l-4 border-red-500 pl-3 mb-6">
            Pepperoni pizza
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
            <img 
              src="/images/pepperoni pizza.png" 
              alt="pepperoni pizza" 
              className="w-52 h-52 object-cover rounded-lg shadow-sm border border-gray-100" 
            />

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200/60 w-full md:w-auto min-w-70">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-1.5 mb-3 flex items-center gap-1">
                🛒 Ingredients
              </h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>16 ounces pizza dough (store-bought or homemade)</li>
                <li>1/2 cup pizza or tomato sauce</li>
                <li>12 ounces mozzarella cheese, grated</li>
                <li>18 to 20 slices pepperoni</li>
                <li>1 teaspoon olive oil</li>
                <li>Flour for rolling the dough</li>
              </ul>
            </div>
          </div>

          <h2 className="text-lg font-bold text-gray-900 mb-3">Preparation steps</h2>
          <ol className="list-decimal list-inside space-y-2.5 text-sm text-gray-600 mb-6 bg-red-50/20 border border-red-100/40 p-4 rounded-lg">
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

          <table className="w-full max-w-xs text-sm border border-gray-200 rounded-md overflow-hidden">
            <tbody>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left font-semibold text-gray-700 px-4 py-2 border-r border-gray-200">Category</th>
                <td className="px-4 py-2 text-gray-600">Dinner</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="text-left font-semibold text-gray-700 px-4 py-2 border-r border-gray-200">Serving</th>
                <td className="px-4 py-2 text-gray-600">4</td>
              </tr>
              <tr className="bg-gray-50">
                <th className="text-left font-semibold text-gray-700 px-4 py-2 border-r border-gray-200">Preparation Time</th>
                <td className="px-4 py-2 text-gray-600">40 minute</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <div className="max-w-4xl mx-auto w-full text-left px-4 mb-6">
        <Link 
          to="/" 
          className="inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 hover:underline transition-colors"
        >
          ← To home
        </Link>
      </div>
    </div>
  );
}

export default Recipe;
