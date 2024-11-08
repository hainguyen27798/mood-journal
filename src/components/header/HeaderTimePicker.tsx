'use client';

import { DatePicker, Radio } from 'antd';
import dayjs from 'dayjs';
import { ChevronDown } from 'lucide-react';
import type { PickerMode } from 'rc-picker/es/interface';
import { useState } from 'react';

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
  const [type, setType] = useState<PickerMode>('date');
  const [current, setCurrent] = useState<dayjs.Dayjs>(dayjs());

  const onChange = (value: dayjs.Dayjs) => {
    setCurrent(value);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Radio.Group
        block
        options={options}
        defaultValue={type}
        optionType="button"
        buttonStyle="solid"
        onChange={(e) => setType(e.target.value)}
      />
      <DatePicker
        picker={type}
        value={current}
        onChange={onChange}
        format={format.get(type)}
        suffixIcon={<ChevronDown size={20} className="relative top-px" />}
      />
    </div>
  );
}
