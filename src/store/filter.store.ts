import dayjs from 'dayjs';
import { create } from 'zustand';

interface IFilterAttrs {
  interval: string;
  date: number;
}

interface IFilterState extends IFilterAttrs {
  update: (filter: IFilterAttrs) => void;
}

export const useFilter = create<IFilterState>((set) => ({
  interval: 'date',
  date: dayjs().valueOf(),
  update: (filter: IFilterAttrs) => set(filter),
}));
