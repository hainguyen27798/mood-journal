import { createReadStream } from 'node:fs';

import { parse } from 'csv-parse';
import dayjs from 'dayjs';
import _ from 'lodash';

import type { TRecord } from '@/types';

export const getData = async (): Promise<TRecord[]> => {
  return new Promise((resolve) => {
    const result: TRecord[] = [];
    createReadStream(process.cwd() + '/mock/data.csv')
      .pipe(parse({ delimiter: ',', columns: true }))
      .on('data', (row) => {
        result.push({
          date: dayjs(row.date).startOf('date').valueOf(),
          distance: _.toNumber(row.distance),
          pace: _.toNumber(row.pace),
          heartRate: _.toNumber(row.heart_rate),
          calories: _.toNumber(row.calories),
        });
      })
      .on('end', () => {
        resolve(result);
      });
  });
};
