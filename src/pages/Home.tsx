import SearchForm from '@/components/SearchForm';
import NewsList from '@/components/News/NewsList';
import CategoryFilter from '@/components/CategoryFilter';

function Home() {
  return (
    <section>
      <div className="border-b border-gray-200">
        <div className="container  py-20">
          <h1>Home</h1>
          <p>Welcome to the home page</p>
        </div>
        <div className="container py-4">
          <CategoryFilter />
        </div>
      </div>

      <div className="flex justify-stretch items-stretch container">
        <div className="flex-1">
          <div className="border-b border-gray-200 py-2 flex justify-between  pe-5">
            <SearchForm />
            <div className="lg:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                focusable="false"
                className=""
              >
                <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
              </svg>
            </div>
          </div>

          <NewsList />
        </div>
        <aside className="w-[400px] hidden lg:block border-l border-gray-200 pl-5">
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
