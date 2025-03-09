import { useQueryState } from 'nuqs';

const SearchForm = () => {
  const [value, setValue] = useQueryState('query');
  return (
    <input
      type="text"
      value={value || ''}
      placeholder="Search title or description"
      onChange={(e) => setValue(e.target.value || null)}
      className="max-w-[400px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
    />
  );
};

export default SearchForm;
