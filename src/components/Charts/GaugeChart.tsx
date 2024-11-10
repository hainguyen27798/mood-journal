'use client';

import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
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
  const screens = useBreakpoint();
  const radius = useMemo(() => (screens?.md ? 0 : 15), [screens?.md]);

  useMemo(() => {
    setChartData([
      {
        value: value!,
        remaining: max! - value!,
      },
    ]);
  }, [value, max]);

  return (
    <div className="h-[80px] w-full min-w-[100px] md:h-[100px] md:min-w-[160px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cy="85%"
          data={chartData}
          startAngle={180}
          endAngle={0}
          innerRadius={64 - radius}
          outerRadius={94 - radius}
        >
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - (screens?.md ? 16 : 8)}
                        className={`${screens?.md ? 'text-2xl' : 'text-lg'} font-bold`}
                      >
                        {label ?? value}
                      </tspan>
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) + (screens?.md ? 4 : 8)} className="fill-neutral-500">
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
