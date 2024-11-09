'use client';

import { useMemo } from 'react';

import GaugeChart from '@/components/Charts/GaugeChart';

type HeartRateProps = {
  heartRate: number;
};

export default function HeartRate({ heartRate }: HeartRateProps) {
  const level = useMemo(() => {
    return heartRate < 120 ? 'low' : heartRate < 160 ? 'high' : 'veryHigh';
  }, [heartRate]);

  return <GaugeChart delay={1500} value={heartRate} max={190} unit="bpm" level={level} />;
}
