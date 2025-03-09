import { timeRanges } from '@/config/timeranges';
import { useQueryStates, parseAsString, useQueryState } from 'nuqs';
import { useState } from 'react';

const DateFilters = () => {
  const [timeline, setTimeline] = useQueryState('timeline');
  const [timeRange, setTimeRange] = useQueryStates({
    to: parseAsString,
    from: parseAsString,
  });

  const [from, setFrom] = useState(timeRange.from);
  const [to, setTo] = useState(timeRange.to);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeRange({ to, from });
    setTimeline(null);
  };

  const handleSelectTimeline = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeline(e.target.value);
    setTimeRange(null);
    setFrom('');
    setTo('');
  };

  const handleResetDates = () => {
    setTimeRange(null);
    setFrom('');
    setTo('');
    setTimeline(null);
  };

  return (
    <div className="">
      <div className="border border-gray-200 rounded p-2">
        <label
          htmlFor="timeline"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Select Timeline
        </label>
        <select
          id="timeline"
          value={timeline || ''}
          onChange={handleSelectTimeline}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Choose a filter...</option>
          {timeRanges.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="text-center my-4">OR</div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 border border-gray-200 rounded p-2"
      >
        <div className="flex gap-4">
          <div className="">
            <label className="block">From:</label>
            <input
              type="date"
              value={from || ''}
              onChange={(e) => setFrom(e.target.value)}
              className="border p-2 rounded"
            />
          </div>
          <div>
            <label className="block">To:</label>
            <input
              type="date"
              value={to || ''}
              onChange={(e) => setTo(e.target.value)}
              className="border p-2 rounded"
            />
          </div>
        </div>
        <div>
          <button
            disabled={!to && !from}
            type="submit"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
          >
            Filter
          </button>
        </div>
      </form>

      <div className="mt-4">
        <button
          onClick={handleResetDates}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-red-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
        >
          Reset Dates Filters
        </button>
      </div>
    </div>
  );
};

export default DateFilters;
