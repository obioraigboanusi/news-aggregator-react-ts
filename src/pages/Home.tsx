import { useQueryState } from 'nuqs';
import { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import CategoryFilter from '@/components/CategoryFilter';
import DateFilters from '@/components/DateFilters';
import NewsList from '@/components/News/NewsList';
import SourcesFilter from '@/components/SourcesFilter';
import clsx from 'clsx';

function Home() {
  const [isFilterOpen, setIsFIlterOpen] = useState(false);
  const [categoryValue] = useQueryState('category');

  return (
    <section className="">
      <div className="bg-gray-100">
        <div className="container mx-auto py-20 text-center ">
          <h1 className="text-4xl font-bold text-gray-900 ">
            World News in One Place
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your lens into global happenings.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="border-b border-gray-200 bg-gray-100 sticky top-0 backdrop-blur-lg z-50">
          <div className="container py-4">
            <CategoryFilter />
          </div>
        </div>
        <div className="flex justify-stretch items-stretch container relative">
          <div className="flex-1">
            <div className="border-b border-gray-200 py-2 flex justify-between items-center pe-5">
              <SearchForm />
              <div className="lg:hidden ml-4">
                <button
                  className="p-1"
                  onClick={() => setIsFIlterOpen((prev) => !prev)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className=""
                  >
                    <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <NewsList />
          </div>
          <aside
            className={clsx(
              'w-[400px] lg:block border-l border-gray-200 px-5 bg-gray-100',
              isFilterOpen
                ? 'block absolute lg:static right-0 lg:right-auto top-[59px]'
                : 'hidden'
            )}
          >
            <div className="py-5 space-y-5 sticky top-[59px]">
              <h3 className="text-xl font-semibold">Filters</h3>

              <div className="border rounded border-gray-200 p-4">
                <h4 className="mb-4">Time ranges</h4>
                <DateFilters />
              </div>
              <div className="border rounded border-gray-200 p-4">
                <h4 className="mb-4">
                  Sources
                  {categoryValue && (
                    <>
                      <span className="ml-1">in</span>
                      <span className="font-medium capitalize ml-1">
                        {categoryValue}
                      </span>
                    </>
                  )}
                </h4>
                <SourcesFilter />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Home;
