import SearchForm from '@/components/SearchForm';
import CategoryFilter from '@/components/CategoryFilter';
import DateFilters from '@/components/DateFilters';
import NewsList from '@/components/News/NewsList';

function Home() {
  return (
    <section className="">
      <div className="border-b border-gray-200 bg-gray-100">
        <div className="container mx-auto py-20 text-center ">
          <h1 className="text-4xl font-bold text-gray-900 ">
            World News in One Place
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your lens into global happenings.
          </p>
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
          <div className="py-5  ">
            <h3 className="text-xl font-semibold mb-5">Filters</h3>

            <div className="border rounded border-gray-200 p-4">
              <h4 className="mb-4">Time ranges</h4>
              <DateFilters />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Home;
