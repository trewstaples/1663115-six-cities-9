import dayjs from 'dayjs';
import { DateFormat } from '../const';

export const dateFormat = (date: string, format: string = DateFormat.Display): string => dayjs(date).format(format);
