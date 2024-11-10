'use client';

import TrendingChart from '@/components/Charts/TrendingChart';
import Loading from '@/components/Loading';
import { AnimRightLeft } from '@/lib/motion';
import type { TRecord } from '@/types';

type RunningTrendingProps = {
  data: TRecord[];
  loading: boolean;
};

export default function RunningTrending({ data, loading }: RunningTrendingProps) {
  return (
    <AnimRightLeft delay={3.5} from="50%" className="relative overflow-hidden rounded-xl bg-white p-4 shadow-md">
      <Loading loading={loading} />
      <div className="mb-3 text-base font-bold">Your Running Trending</div>
      <TrendingChart records={data} />
    </AnimRightLeft>
  );
}
