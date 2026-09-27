import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col justify-between">

        <section className="bg-linear-to-r text-gray-950 py-12 px-6 text-center shadow-inner">
             <div className="max-w-3xl mx-auto">
                <p>
                    Welcome, this is a small home for simple, delicious pizza recipes.
                    Each recipe lists what you need, what to do and how long it takes.
                    Browse the collection below, or add a recipe of your own.
                </p>
             </div>
        </section>
      

      <main className="max-w-6xl mx-auto w-full px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div>
            <div className="aspect-square w-full overflow-hidden bg-gray-100">
              <img
                src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/veg_cheese_pizza.webp"
                alt="A freshly baked cheese pizza"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                Vegetarian
              </span>
              <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-orange-600 transition-colors">
                <Link to="/recipe#veg">Veg Cheese Pizza</Link>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                One of the most delicious options for vegetarians, loaded with crisp
                garden vegetables, premium cheese, sweet peppers, onions, and juicy tomatoes.
              </p>
            </div>
          </div>
          <div className="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/50">
            <figcaption className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              ✨ Freshly Prepared
            </figcaption>
          </div>
        </article>

        <article className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div>
            <div className="aspect-square w-full overflow-hidden bg-gray-100">
              <img
                src="/images/pepperoni pizza.png"
                alt="A pepperoni pizza melted with cheese"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-red-50 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                Classic Hit
              </span>
              <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-orange-600 transition-colors">
                <Link to="/recipe#pepperoni">Pepperoni Pizza</Link>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                A savory, crowd-pleasing pizza topped with premium pepperoni and deeply melted cheese 
                over a perfectly crispy golden crust — tailored for every true pizza lover.
              </p>
            </div>
          </div>
          <div className="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/50">
            <figcaption className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              🔥 Crispy Crust
            </figcaption>
          </div>
        </article>

        <article className="">
             <div>
            <div className="aspect-square w-full overflow-hidden bg-black flex items-center justify-center">
              <video controls autoPlay muted loop className="w-full h-full object-cover">
                <source src="/Videos/Delicious.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-6">
              <span className="inline-block bg-amber-50 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                Community
              </span>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Customer Enjoying our Pizza
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Watch the complete satisfaction of diving into a hot slice filled with strings of melted cheese 
                and gourmet toppings. A satisfying treat made for any special occasion.
              </p>
            </div>
          </div>
          <div className="px-6 pb-6 pt-3 border-t border-gray-50 bg-amber-50/40">
            <p className="text-sm font-semibold text-amber-700 italic animate-pulse">
              💬 "Hmmm Delicious"
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Home;