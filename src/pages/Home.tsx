import NewsList from '../components/News/NewsList';

function Home() {
  return (
    <section>
      <div className="border-b border-gray-200 py-20">
        <div className="container">
          <h1>Home</h1>
          <p>Welcome to the home page</p>
        </div>
      </div>

      <div className="flex gap-20 container">
        <div className="">
          <NewsList />
        </div>
        <aside className="w-120 h-full hidden lg:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          vitae, corrupti animi culpa quaerat dolorem quo tempora ipsum magnam
          ex ab, et iste repellat iure numquam est? Voluptatibus, architecto
          necessitatibus?
        </aside>
      </div>
    </section>
  );
}

export default Home;
