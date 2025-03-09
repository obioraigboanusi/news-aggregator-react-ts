const ArticleCardLoader = () => {
  return (
    <div className="py-4 lg:flex max-w-100 lg:max-w-[unset] gap-4 animate-pulse">
      <div className="w-full lg:w-40 aspect-[4/3] bg-gray-300 rounded" />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <div className="h-4 w-20 bg-gray-300 rounded" />
            {/* <div className="h-4 w-16 bg-gray-300 rounded" /> */}
          </div>
          <div className="mt-2 h-6 w-full bg-gray-300 rounded" />
          <div className="mt-1 h-6 w-3/4 bg-gray-300 rounded" />
        </div>
        <div className="flex gap-2 items-center text-sm mt-2">
          <div className="h-4 w-24 bg-gray-300 rounded" />
          <div className="bg-gray-600 h-2 w-2 rounded-full" />
          <div className="h-4 w-32 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ArticleCardLoader;
