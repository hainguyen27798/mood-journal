'use client';

import { useEffect, useState } from 'react';

import { getRunningTrending } from '@/_action/GetRunningTrendingAction';
import TrendingChart from '@/components/Charts/TrendingChart';
import Loading from '@/components/Loading';
import { AnimRightLeft } from '@/lib/motion';
import { useFilter } from '@/store';
import type { TRecord } from '@/types';

export default function RunningTrending() {
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
    <AnimRightLeft delay={3} from="50%" className="relative overflow-hidden rounded-xl bg-white p-4 shadow-md">
      <Loading loading={loading} />
      <div className="mb-3 text-base font-bold">Your Running Trending</div>
      <TrendingChart records={data} />
    </AnimRightLeft>
  );
}
