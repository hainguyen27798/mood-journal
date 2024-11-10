'use server';

import dayjs from 'dayjs';
import _ from 'lodash';

import { getData } from '@/_action/get-data';
import type { TRecord } from '@/types';

export const getRunningTrending = async (interval: string, date: number): Promise<TRecord[]> => {
  const intervalPeriod = interval === 'date' ? 'week' : interval;
  let intervalFilter: string;
  let formatDate: string = 'DD-MM-YYYY';

  switch (interval) {
    case 'month':
      intervalFilter = 'date';
      break;
    case 'year':
      intervalFilter = 'month';
      formatDate = 'MMM YYYY';
      break;
    default:
      intervalFilter = 'date';
  }

  const startPeriod = dayjs(date)
    .startOf(intervalPeriod as any)
    .valueOf();
  const endPeriod = dayjs(date)
    .endOf(intervalPeriod as any)
    .valueOf();

  const result = await getData();
  const data = _.filter(result, (item) => item.date >= startPeriod && item.date <= endPeriod);

  const groupData = _.groupBy(data, (item) =>
    dayjs(item.date)
      .startOf(intervalFilter as any)
      .valueOf(),
  );

  const resultData: TRecord[] = [];
  _.forEach(groupData, (value, key) => {
    resultData.push({
      date: _.toNumber(key),
      period: dayjs(_.toNumber(key)).format(formatDate),
      distance: _.round(_.meanBy(value, 'distance'), 2),
      pace: _.round(_.meanBy(value, 'pace'), 2),
      heartRate: _.round(_.meanBy(value, 'heartRate'), 0),
      calories: _.round(_.meanBy(value, 'calories'), 2),
    });
  });

  return resultData;
};
