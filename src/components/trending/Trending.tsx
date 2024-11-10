'use client';

import { useEffect, useState } from 'react';

import { getRunningTrending } from '@/_action/GetRunningTrendingAction';
import HeartRateTrending from '@/components/trending/HeartRateTrending';
import RunningTrending from '@/components/trending/RunningTrending';
import { useFilter } from '@/store';
import type { TRecord } from '@/types';

export default function Trending() {
  const { interval, date } = useFilter();
  const [data, setData] = useState<TRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!interval || !date) return;
    setLoading(true);
    getRunningTrending(interval, date)
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [interval, date]);

  return (
    <>
      <RunningTrending data={data} loading={loading} />
      <HeartRateTrending data={data} loading={loading} />
    </>
  );
}
