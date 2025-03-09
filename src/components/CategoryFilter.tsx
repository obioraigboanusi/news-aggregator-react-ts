import clsx from 'clsx';
import { useQueryState } from 'nuqs';

const categories = [
  { id: null, name: 'All' },
  { id: 'technology', name: 'Technology' },
  { id: 'sports', name: 'Sports' },
  { id: 'health', name: 'Health' },
  { id: 'business', name: 'Business' },
];

const CategoryFilter = () => {
  const [value, setValue] = useQueryState('category');
  return (
    <div>
      <ul className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <li key={category.name}>
            <button
              onClick={() => setValue(category.id)}
              className={clsx('font-semibold text-lg hover:text-green-700', {
                'text-green-600': category.id === value,
              })}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
