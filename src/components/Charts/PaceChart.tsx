'use client';

import _ from 'lodash';
import { useMemo } from 'react';

import GaugeChart from '@/components/Charts/GaugeChart';

type PaceChartProps = {
  pace: number;
};

export default function PaceChart({ pace }: PaceChartProps) {
  const level = useMemo(() => {
    return pace > 7 ? 'low' : pace > 5 ? 'high' : 'veryHigh';
  }, [pace]);

  return (
    <GaugeChart
      delay={2000}
      value={_.round(60 / pace, 2)}
      max={18}
      unit="min/km"
      level={level}
      label={_.round(pace, 2)}
    />
  );
}
