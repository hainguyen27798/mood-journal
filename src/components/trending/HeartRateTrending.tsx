'use client';

import TrendingLineChart from '@/components/Charts/TrendingLineChart';
import Loading from '@/components/Loading';
import { AnimRightLeft } from '@/lib/motion';
import type { TRecord } from '@/types';

type RunningTrendingProps = {
  data: TRecord[];
  loading: boolean;
};

export default function HeartRateTrending({ data, loading }: RunningTrendingProps) {
  return (
    <AnimRightLeft delay={3} from="50%" className="relative overflow-hidden rounded-xl bg-white p-4 shadow-md">
      <Loading loading={loading} />
      <div className="mb-3 text-base font-bold">Your Heart Rate Trending</div>
      <TrendingLineChart records={data} />
    </AnimRightLeft>
  );
}
