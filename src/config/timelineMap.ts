import moment from 'moment';

const timelineFilters: Record<string, { from: string; to: string }> = {
  today: {
    from: moment().startOf('day').format('YYYY-MM-DD'),
    to: moment().endOf('day').format('YYYY-MM-DD'),
  },
  yesterday: {
    from: moment().subtract(1, 'day').startOf('day').format('YYYY-MM-DD'),
    to: moment().subtract(1, 'day').endOf('day').format('YYYY-MM-DD'),
  },
  'this-week': {
    from: moment().startOf('isoWeek').format('YYYY-MM-DD'),
    to: moment().endOf('day').format('YYYY-MM-DD'),
  },
  'last-week': {
    from: moment().subtract(1, 'week').startOf('isoWeek').format('YYYY-MM-DD'),
    to: moment().subtract(1, 'week').endOf('isoWeek').format('YYYY-MM-DD'),
  },
  'this-month': {
    from: moment().startOf('month').format('YYYY-MM-DD'),
    to: moment().endOf('day').format('YYYY-MM-DD'),
  },
  'last-month': {
    from: moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
    to: moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD'),
  },
  'this-year': {
    from: moment().startOf('year').format('YYYY-MM-DD'),
    to: moment().endOf('day').format('YYYY-MM-DD'),
  },
};

export const getDateRange = (key: string) =>
  timelineFilters[key.toLowerCase()] || null;
