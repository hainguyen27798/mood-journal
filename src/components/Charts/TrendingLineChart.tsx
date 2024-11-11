'use client';

import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { Area, CartesianGrid, ComposedChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import type { TooltipProps } from 'recharts/types/component/Tooltip';
import colors from 'tailwindcss/colors';

import type { TRecord } from '@/types';

type TrendingChartProps = {
  records: TRecord[];
};

export default function TrendingLineChart({ records }: TrendingChartProps) {
  const screens = useBreakpoint();

  return (
    <div className="h-36 w-full min-w-[160px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart accessibilityLayer data={records} className="focus:outline-none" barCategoryGap={'20%'}>
          <CartesianGrid vertical={false} stroke={colors.neutral[200]} />
          <defs>
            <linearGradient id="colorHeaderRate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.amber[500]} stopOpacity={0.6} />
              <stop offset="90%" stopColor={colors.amber[500]} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="period"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            interval="preserveStartEnd"
            tick={{ fill: colors.neutral[400], fontSize: screens.md ? 14 : 12, fontWeight: 400 }}
          />
          <Tooltip content={<TrendingLineChartTooltip />} />
          <Area
            type="monotone"
            yAxisId="right"
            dataKey="heartRate"
            fillOpacity={1}
            stroke={colors.amber[500]}
            fill="url(#colorHeaderRate)"
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

const TrendingLineChartTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col gap-0.5 rounded bg-white px-3 py-2 shadow">
        <div className="mb-0.5 text-xs font-bold text-neutral-800">{label}</div>
        <div className="flex items-center justify-between gap-3 text-sm text-neutral-500">
          <span className="font-medium text-amber-500">Heart Rate:</span>
          <span>
            <span className="font-medium text-neutral-800">{payload[0].payload.heartRate}</span> bpm
          </span>
        </div>
      </div>
    );
  }

  return null;
};
