'use client';

import { Activity, Gauge, LandPlot, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

import { getSummaryAction } from '@/_action/GetSummaryAction';
import HeartRate from '@/components/Charts/HeartRate';
import PaceChart from '@/components/Charts/PaceChart';
import AnimTopBottom from '@/lib/motion/AnimTopBottom';
import { useFilter } from '@/store';
import type { TRecord } from '@/types';

export default function HeathSummary() {
  const { interval, date } = useFilter();
  const [data, setData] = useState<TRecord>();

  useEffect(() => {
    if (!interval || !date) return;
    getSummaryAction(interval, date).then((res) => {
      setData(res);
    });
  }, [interval, date]);

  return (
    <div className="flex flex-wrap gap-6">
      <AnimTopBottom delay={1} className="flex-1 rounded-xl bg-white p-4 shadow-md">
        <div className="flex items-center gap-2.5 text-base font-bold text-rose-400">
          <Activity size={20} />
          <div className="leading-none">Heart Rate</div>
        </div>
        <HeartRate heartRate={data?.heartRate || 0} />
      </AnimTopBottom>
      <AnimTopBottom delay={1.5} className="flex-1 rounded-xl bg-white p-4 shadow-md">
        <div className="flex items-center gap-2.5 text-base font-bold text-cyan-400">
          <Gauge size={20} />
          <div className="leading-none">Pace</div>
        </div>
        <PaceChart />
      </AnimTopBottom>
      <AnimTopBottom delay={2} className="flex-1 rounded-xl bg-white p-4 shadow-md">
        <div className="flex items-center gap-2.5 text-base font-bold text-indigo-400">
          <LandPlot size={20} />
          <div className="leading-none">Distance</div>
        </div>
        <PaceChart />
      </AnimTopBottom>
      <AnimTopBottom delay={2.5} className="flex-1 rounded-xl bg-white p-4 shadow-md">
        <div className="flex items-center gap-2.5 text-base font-bold text-amber-400">
          <Zap size={20} />
          <div className="leading-none">Kcal</div>
        </div>
        <PaceChart />
      </AnimTopBottom>
    </div>
  );
}
