'use client';

import { DatePicker, Radio } from 'antd';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import dayjs from 'dayjs';
import { ChevronDown } from 'lucide-react';
import type { PickerMode } from 'rc-picker/es/interface';
import { useState } from 'react';

import { useFilter } from '@/store';

const options = [
  { label: 'Year', value: 'year' },
  { label: 'Month', value: 'month' },
  { label: 'Date', value: 'date' },
];

const format = new Map<string, string>([
  ['year', 'YYYY'],
  ['month', 'MMM YYYY'],
  ['date', 'DD-MM-YYYY'],
]);

export default function HeaderTimePicker() {
  const { update } = useFilter();
  const [type, setType] = useState<PickerMode>('month');
  const [current, setCurrent] = useState<dayjs.Dayjs>(dayjs());
  const screens = useBreakpoint();

  const onChange = (value: dayjs.Dayjs) => {
    setCurrent(value);
    update({ interval: type, date: value.valueOf() });
  };

  const onTypeChange = (value: string) => {
    setType(value as any);
    update({ interval: value, date: current.valueOf() });
  };

  return (
    <div className="flex grow flex-wrap justify-end gap-2 sm:gap-4">
      <Radio.Group
        size={screens.md ? 'middle' : 'small'}
        block
        options={options}
        defaultValue={type}
        optionType="button"
        buttonStyle="solid"
        onChange={(e) => onTypeChange(e.target.value)}
      />
      <DatePicker
        size={screens.md ? 'middle' : 'small'}
        picker={type}
        value={current}
        onChange={onChange}
        format={format.get(type)}
        suffixIcon={<ChevronDown size={20} className="relative top-px" />}
      />
    </div>
  );
}
