'use client';

import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { Area, Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { TooltipProps } from 'recharts/types/component/Tooltip';
import colors from 'tailwindcss/colors';

import type { TRecord } from '@/types';

type TrendingChartProps = {
  records: TRecord[];
};

const TrendingChartTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col gap-0.5 rounded bg-white px-3 py-2 shadow">
        <div className="mb-0.5 text-xs font-bold text-neutral-800">{label}</div>
        <div className="flex items-center justify-between gap-3 text-sm text-neutral-500">
          <span className="font-medium text-indigo-500">Distance:</span>
          <span>
            <span className="font-medium text-neutral-800">{payload[0].payload.distance}</span> km
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 text-sm text-neutral-500">
          <span className="font-medium text-teal-500">Pace:</span>
          <span>
            <span className="font-medium text-neutral-800">{payload[0].payload.pace}</span> min/km
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export default function TrendingChart({ records }: TrendingChartProps) {
  const screens = useBreakpoint();

  return (
    <div className="h-48 w-full min-w-[160px] md:h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart accessibilityLayer data={records} className="focus:outline-none" barCategoryGap={'20%'}>
          <CartesianGrid vertical={false} stroke={colors.neutral[200]} />
          <defs>
            <linearGradient id="colorPace" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.teal[500]} stopOpacity={0.6} />
              <stop offset="90%" stopColor={colors.teal[500]} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorDistance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.indigo[300]} stopOpacity={1} />
              <stop offset="100%" stopColor={colors.neutral[300]} stopOpacity={1} />
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
          <YAxis yAxisId="left" hide={true} />
          <YAxis yAxisId="right" hide={true} />
          <Tooltip content={<TrendingChartTooltip />} />
          <Area
            type="monotone"
            yAxisId="right"
            dataKey={(item) => 60 / item.pace}
            fillOpacity={1}
            fill="url(#colorPace)"
            strokeWidth={2}
          />
          <Bar yAxisId="left" dataKey="distance" fill="url(#colorDistance)" maxBarSize={30} radius={8} />
          <Line
            type="monotone"
            yAxisId="right"
            dot={false}
            strokeWidth={2}
            dataKey={(item) => 60 / item.pace}
            stroke={colors.teal[500]}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
