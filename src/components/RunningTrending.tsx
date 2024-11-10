'use client';

import { useEffect, useState } from 'react';

import { getRunningTrending } from '@/_action/GetRunningTrendingAction';
import TrendingChart from '@/components/Charts/TrendingChart';
import { AnimRightLeft } from '@/lib/motion';
import { useFilter } from '@/store';
import type { TRecord } from '@/types';

export default function RunningTrending() {
  const { interval, date } = useFilter();
  const [data, setData] = useState<TRecord[]>([]);

  useEffect(() => {
    if (!interval || !date) return;
    getRunningTrending(interval, date).then((res) => {
      console.log(res);
      setData(res);
    });
  }, [interval, date]);

  return (
    <AnimRightLeft delay={3} from="50%" className="overflow-hidden rounded-xl bg-white p-4 shadow-md">
      <div className="mb-3 text-base font-bold">Your Running Trending</div>
      <TrendingChart records={data} />
    </AnimRightLeft>
  );
}
