import { DateFormat } from '../const';
import dayjs from 'dayjs';

export const dateFormat = (date: string, format: string = DateFormat.Display): string => dayjs(date).format(format);
