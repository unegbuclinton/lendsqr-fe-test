import dayjs from 'dayjs';

export function formatDate(date: number) {
  return dayjs(date).format(' MMM DD H:M A');
}
