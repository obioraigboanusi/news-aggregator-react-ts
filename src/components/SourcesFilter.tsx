import useSources from '@/hooks/useSources';
import { useQueryState } from 'nuqs';
import { useMemo } from 'react';

const SourcesFilter = () => {
  const [source, setSource] = useQueryState('source');
  const [categoryValue] = useQueryState('category');
  const category = categoryValue || undefined;
  const { data } = useSources({ category });

  const sources = useMemo(() => {
    return [{ id: 'ny-times', name: 'The New York Times' }, ...(data || [])];
  }, [data]);

  return (
    <div className="border border-gray-200 rounded p-2">
      <label
        htmlFor="timeline"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Select Timeline
      </label>
      <select
        id="timeline"
        value={source || ''}
        onChange={(e) => setSource(e.target.value || null)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Choose a filter...</option>
        {sources.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SourcesFilter;
