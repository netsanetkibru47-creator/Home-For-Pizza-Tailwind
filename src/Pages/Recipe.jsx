import React, { useState } from 'react';

function Recipe({ darkMode }) {
  // Keeps track of which pizza card recipe details are open
  const [activePizzaId, setActivePizzaId] = useState(null);

  const pizzaCollection = [
    {
      id: 'veg',
      title: 'Veg Cheese Pizza',
      tag: 'Vegetarian',
      tagStyle: darkMode ? 'bg-green-950 text-green-400' : 'bg-green-50 text-green-700',
      description: 'One of the most delicious options for vegetarians, loaded with crisp garden vegetables, premium cheese, sweet peppers, onions, and juicy tomatoes.',
      img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/veg_cheese_pizza.webp',
      badge: '✨ Freshly Prepared',
      ingredients: ['1 Pizza Dough base', '1/2 cup Marinara sauce', '1 cup Shredded Mozzarella', 'Bell peppers, red onions, diced tomatoes'],
      steps: ['Preheat oven to 450°F (230°C).', 'Spread marinara sauce smoothly across the dough.', 'Scatter chopped veggies evenly and cover with mozzarella cheese.', 'Bake for 12-15 minutes until edges are perfectly golden crust brown.']
    },
    {
      id: 'pepperoni',
      title: 'Pepperoni Pizza',
      tag: 'Classic Hit',
      tagStyle: darkMode ? 'bg-red-950 text-red-400' : 'bg-red-50 text-red-700',
      description: 'A savory, crowd-pleasing pizza topped with premium pepperoni and deeply melted cheese over a perfectly crispy golden crust.',
      img: '/images/pepperoni pizza.png',
      badge: '🔥 Crispy Crust',
      ingredients: ['1 Pizza Dough base', '1/2 cup Pizza sauce', '1.5 cups Premium Pepperoni slices', '1 cup Mozzarella cheese'],
      steps: ['Preheat oven to 450°F (230°C).', 'Lather your pizza sauce layer.', 'Add half the cheese, arrange pepperoni slices, then top with remaining cheese.', 'Bake for 12 minutes until pepperoni curls slightly up and crisps.']
    },
    {
      id: 'margherita',
      title: 'Classic Margherita',
      tag: 'Traditional',
      tagStyle: darkMode ? 'bg-indigo-950 text-indigo-400' : 'bg-indigo-50 text-indigo-700',
      description: 'Simple Italian masterpiece featuring crushed San Marzano tomatoes, fresh buffalo mozzarella, aromatic basil leaves, and extra virgin olive oil.',
      img: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww',
      badge: '🇮🇹 Authentic Taste',
      ingredients: ['Fresh Pizza Dough', 'San Marzano crushed tomatoes', 'Fresh Mozzarella logs (sliced)', 'Fresh Basil leaves', '1 tbsp Olive oil'],
      steps: ['Preheat oven to high setting.', 'Stretch dough thin and add crushed tomatoes.', 'Distribute fresh mozzarella circles evenly.', 'Bake 10 mins, take out and garnish instantly with fresh basil leaves and oil drizzle.']
    },
    {
      id: 'bbq-chicken',
      title: 'Spicy BBQ Chicken',
      tag: 'Hearty',
      tagStyle: darkMode ? 'bg-amber-950 text-amber-400' : 'bg-amber-50 text-amber-700',
      description: 'Tangy custom barbecue sauce base loaded with smoked shredded chicken breast, red onions, fresh cilantro, and a blend of cheeses.',
      img: 'https://media.istockphoto.com/id/489593343/photo/bbq-chicken-pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=7tu_AJDwy6m1wlk9LMz4Ybrau34MLJeaKlQrbfT9opM=',
      badge: '🍗 Bold BBQ Flavor',
      ingredients: ['1 Pizza Dough base', '1/2 cup Smoky BBQ Sauce', '1 cup cooked shredded chicken', 'Sliced red onions & cilantro'],
      steps: ['Preheat oven to 450°F.', 'Use BBQ sauce instead of tomato paste.', 'Spread chicken strips and onion layers.', 'Bake for 14 minutes, then top with chopped green cilantro.']
    },
    {
      id: 'mushroom-truffle',
      title: 'Mushroom & Truffle',
      tag: 'Gourmet',
      tagStyle: darkMode ? 'bg-purple-950 text-purple-400' : 'bg-purple-50 text-purple-700',
      description: 'Earthy white-sauce base loaded with sliced wild cremini mushrooms, fontina cheese, caramelized onions, and finished with luxurious truffle oil.',
      img: 'https://dudethatcookz.com/wp-content/uploads/2018/03/DSC_1981-01-1024x1536.jpeg.webp',
      badge: '✨ Premium Chef Pick',
      ingredients: ['1 Pizza Dough base', 'Garlic white cream sauce', '1 cup mixed sliced mushrooms', '1 tsp Truffle oil drizzle'],
      steps: ['Preheat oven to 450°F.', 'Coat base with cream sauce layer.', 'Sauté mushrooms slightly, then place them across the cheese crust layout.', 'Bake 12 mins, drizzle truffle oil right before slicing.']
    },
    {
      id: 'hawaiian',
      title: 'Classic Hawaiian',
      tag: 'Sweet & Savory',
      tagStyle: darkMode ? 'bg-sky-950 text-sky-400' : 'bg-sky-50 text-sky-700',
      description: 'A polarizing yet delicious combination of sweet juicy pineapple chunks, smoky premium cooked ham slices, and deeply bubbled mozzarella cheese.',
      img: 'https://plus.unsplash.com/premium_photo-1672498268734-0f41e888298d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGF3YWlpYW4lMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D',
      badge: '🍍 Tropical Twist',
      ingredients: ['1 Pizza Dough base', '1/2 cup Rich Tomato Sauce', '1 cup shredded Mozzarella cheese', '1/2 cup cooked ham or Canadian bacon slices', '1/2 cup pineapple tidbits (drained thoroughly)'],
      steps: ['Preheat oven to 450°F (230°C).', 'Coat your rolled-out dough base with pizza sauce.', 'Layer cheese, then evenly scatter the smoky ham slices and drained pineapple chunks.', 'Bake for 12-14 minutes until the crust is deeply golden and cheese is bubbling.']
    }
  ];

  const handleToggleRecipe = (id) => {
    setActivePizzaId(activePizzaId === id ? null : id);
  };

  return (
    <section className="max-w-6xl mx-auto w-full px-4 py-16">
      <h2 className="text-3xl font-black mb-2 text-center tracking-tight">Our Pizza Collection</h2>
      <p className={`text-center text-sm mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Click on any pizza title or action button below to instantly reveal its culinary recipe guide.
      </p>
      
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pizzaCollection.map((pizza) => (
          <div key={pizza.id} className="flex flex-col justify-between">
            <article className={`border rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between h-full ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}>
              <div>
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                  <img 
                    src={pizza.img} 
                    alt={pizza.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    onError={(e) => { e.target.src = "https://unsplash.com"; }}
                  />
                </div>
                
                <div className="p-6">
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3 ${pizza.tagStyle}`}>
                    {pizza.tag}
                  </span>
                  
                  <h3 
                    onClick={() => handleToggleRecipe(pizza.id)}
                    className={`text-xl font-bold mb-2 cursor-pointer hover:text-orange-500 transition-colors`}
                  >
                    {pizza.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {pizza.description}
                  </p>

                  <button
                    onClick={() => handleToggleRecipe(pizza.id)}
                    className="w-full py-2 border border-orange-500 text-orange-500 font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all cursor-pointer"
                  >
                    {activePizzaId === pizza.id ? 'Close Recipe ▲' : 'View Full Recipe ▼'}
                  </button>
                </div>
              </div>

              <div className={`px-6 pb-4 pt-2 border-t ${darkMode ? 'border-gray-700 bg-gray-800/50 text-gray-400' : 'border-gray-50 bg-gray-50/50 text-gray-400'}`}>
                <figcaption className="text-xs font-semibold uppercase tracking-wide">{pizza.badge}</figcaption>
              </div>
            </article>

            {/* DYNAMIC EXPANDABLE RECIPE BLOCK SHOWN DIRECTLY BELOW */}
            {activePizzaId === pizza.id && (
              <div className={`mt-3 p-5 rounded-2xl border text-sm animate-fadeIn transition-all shadow-inner ${
                darkMode ? 'bg-slate-900 border-orange-900/60 text-gray-100' : 'bg-orange-50/40 border-orange-200 text-gray-800'
              }`}>
                <h4 className="font-bold text-orange-500 text-base mb-2 uppercase tracking-wide">🛒 What You Need:</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  {pizza.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
                </ul>

                <h4 className="font-bold text-orange-500 text-base mb-2 uppercase tracking-wide">🍳 What To Do:</h4>
                <ol className="list-decimal pl-5 space-y-2">
                  {pizza.steps.map((step, idx) => <li key={idx} className="leading-relaxed">{step}</li>)}
                </ol>
              </div>
            )}
          </div>
        ))}
      </main>
    </section>
  );
}

export default Recipe;