'use client';

import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { Area, CartesianGrid, ComposedChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
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
            tick={{ fill: colors.neutral[400], fontSize: screens.md ? 14 : 12, fontWeight: 400 }}
          />
          <Tooltip />
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
