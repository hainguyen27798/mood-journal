'use client';

import { Area, Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import colors from 'tailwindcss/colors';

import type { TRecord } from '@/types';

type TrendingChartProps = {
  records: TRecord[];
};

export default function TrendingChart({ records }: TrendingChartProps) {
  return (
    <div className="h-[300px] w-full min-w-[160px]">
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
            tick={{ fill: colors.neutral[400], fontSize: 14, fontWeight: 400 }}
          />
          <YAxis yAxisId="left" hide={true} />
          <YAxis yAxisId="right" hide={true} />
          <Tooltip />
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
            fill="var(--color-primary)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
