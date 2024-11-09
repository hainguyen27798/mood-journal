'use server';

import dayjs from 'dayjs';
import _ from 'lodash';

import { getData } from '@/_action/get-data';
import type { TRecord } from '@/types';

export const getSummaryAction = async (interval: string, date: number): Promise<TRecord> => {
  const startPeriod = dayjs(date)
    .startOf(interval as any)
    .valueOf();
  const endPeriod = dayjs(date)
    .endOf(interval as any)
    .valueOf();

  const result = await getData();
  const data = _.filter(result, (item) => item.date >= startPeriod && item.date <= endPeriod);

  return {
    date,
    distance: _.meanBy(data, 'distance'),
    pace: _.meanBy(data, 'pace'),
    heartRate: _.round(_.meanBy(data, 'heartRate'), 0),
    calories: _.meanBy(data, 'calories'),
  };
};
