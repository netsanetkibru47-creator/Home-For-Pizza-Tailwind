import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <header className="site-header">
        <div>
          <h1>Netsi's Pizza Recipe</h1>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/recipe">Recipe</Link>
          <Link to="/add-recipe">Add Recipe</Link>
        </nav>
      </header>

      <p>
        Welcome, this is a small home for simple, delicious pizza recipes.
        Each recipe lists what you need, what to do and how long it takes.
        Browse the collection below, or add a recipe of your own.
      </p>

      <main className="recipe-grid">
        <article className="veg">
          <h2>
            <Link to="/recipe#veg">Veg cheese pizza</Link>
          </h2>
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/veg_cheese_pizza.webp"
            alt="A freshly baked cheese pizza"
            width="300"
          />
          <figcaption>Delicious</figcaption>
          <p>
            One of the most delicious options for vegetarians, topped with
            vegetables, cheese, peppers, onions and tomatoes.
          </p>
        </article>

        <article className="veg">
          <h2>
            <Link to="/recipe#pepperoni">Pepperoni Pizza</Link>
          </h2>
          <img
            src="/images/pepperoni pizza.png"
            alt="A pepperoni pizza melted with cheese"
            width="300"
          />
          <figcaption>Tasty</figcaption>
          <p>
            A tasty pizza topped with pepperoni and melted cheese, with a
            crispy crust — perfect for every pizza lover.
          </p>
        </article>

        <article className="video">
          <h2>Customer Enjoying our Pizza</h2>
          <video controls autoPlay muted loop>
            <source src="/Videos/Delicious.mp4" type="video/mp4" />
          </video>
          <p className="caption">Hmmm Delicious</p>
          <p>
            Enjoy a delicious slice of pizza with melted cheese and tasty
            topping. A satisfying treat for any occasion.
          </p>
        </article>
      </main>

      <footer>&lt;&lt;&lt; &copy; Pizza recipe platform &gt;&gt;&gt;</footer>
    </>
  )
}

export default Home;