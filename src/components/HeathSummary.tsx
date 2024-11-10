'use client';

import _ from 'lodash';
import { Activity, CircleGauge, LandPlot, Zap } from 'lucide-react';
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
      <AnimTopBottom delay={1} className="flex flex-1 flex-col rounded-xl bg-white p-4 shadow-md">
        <div className="flex items-center gap-2.5 text-base font-bold text-rose-400">
          <Activity size={20} />
          <div className="leading-none">Heart Rate</div>
        </div>
        <div className="flex w-full grow items-center">
          <HeartRate heartRate={data?.heartRate || 0} />
        </div>
      </AnimTopBottom>
      <AnimTopBottom delay={1.5} className="flex flex-1 flex-col rounded-xl bg-white p-4 shadow-md">
        <div className="flex items-center gap-2.5 text-base font-bold text-teal-500">
          <CircleGauge size={20} />
          <div className="leading-none">Pace</div>
        </div>
        <div className="flex w-full grow items-center">
          <PaceChart pace={data?.pace || 0} />
        </div>
      </AnimTopBottom>
      <div className="flex flex-1 flex-col gap-4">
        <AnimTopBottom delay={2} className="flex flex-1 items-center justify-between rounded-xl bg-white p-4 shadow-md">
          <div className="flex items-center gap-2.5 text-base font-bold text-indigo-400">
            <LandPlot size={20} />
            <div className="leading-none">Distance</div>
          </div>
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-lg font-bold leading-none">{_.round(data?.distance || 0, 2)}</span>
            <span className="text-neutral-500">Km</span>
          </div>
        </AnimTopBottom>
        <AnimTopBottom
          delay={2.5}
          className="flex flex-1 flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-4 shadow-md"
        >
          <div className="flex items-center gap-2.5 text-base font-bold text-amber-400">
            <Zap size={20} />
            <div className="text-nowrap leading-none">Calories Consumed</div>
          </div>
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-lg font-bold leading-none">{_.round(data?.calories || 0, 2)}</span>
            <span className="text-neutral-500">Kcal</span>
          </div>
        </AnimTopBottom>
      </div>
    </div>
  );
}
