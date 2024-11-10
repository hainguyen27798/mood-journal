import dayjs from 'dayjs';
import _ from 'lodash';
import papa from 'papaparse';

import type { TRecord } from '@/types';

export const getData = async (): Promise<TRecord[]> => {
  const result: TRecord[] = [];
  const url = process.env.NEXT_PUBLIC_MOCK_DATA_URL!;
  const csv = await fetch(url, {
    method: 'get',
    headers: {
      'content-type': 'text/csv;charset=UTF-8',
    },
  });

  if (csv.ok) {
    const data = papa.parse<any>(await csv.text(), {
      header: true,
      delimiter: ',',
    }).data;

    _.forEach(data, (row) => {
      result.push({
        date: dayjs(row.date).startOf('date').valueOf(),
        distance: _.toNumber(row.distance),
        pace: _.toNumber(row.pace),
        heartRate: _.toNumber(row.heart_rate),
        calories: _.toNumber(row.calories),
      });
    });
  }

  return result;
};
