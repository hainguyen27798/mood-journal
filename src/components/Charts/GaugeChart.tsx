'use client';

import { useMemo, useState } from 'react';
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import colors from 'tailwindcss/colors';

type GaugeChartProps = {
  delay?: number;
  value?: number;
  max?: number;
  unit?: string;
  level?: string;
  label?: number | string;
};

type TGaugeData = {
  value: number;
  remaining: number;
};

const colorLevels = new Map<string, string>([
  ['low', 'var(--color-primary)'],
  ['high', colors.amber[500]],
  ['veryHigh', colors.rose[400]],
]);

export default function GaugeChart({ delay = 0, value, max, unit, level = 'low', label }: GaugeChartProps) {
  const [chartData, setChartData] = useState<TGaugeData[]>([{ value: 3, remaining: 7.5 }]);

  useMemo(() => {
    setChartData([
      {
        value: value!,
        remaining: max! - value!,
      },
    ]);
  }, [value, max]);

  return (
    <div className="h-[100px] w-full min-w-[160px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cy="85%" data={chartData} startAngle={180} endAngle={0} innerRadius={64} outerRadius={94}>
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} className="text-2xl font-bold">
                        {label ?? value}
                      </tspan>
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-neutral-500">
                        {unit}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="value"
            background
            stackId="a"
            cornerRadius={5}
            fill={colorLevels.get(level!)}
            className="stroke-transparent stroke-2"
          />
          <RadialBar
            animationBegin={delay}
            dataKey="remaining"
            stackId="a"
            cornerRadius={5}
            className="fill-transparent stroke-transparent stroke-2"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
