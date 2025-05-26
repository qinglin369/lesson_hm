/**
 *
 * @param data1 开始时间
 * @param data2 结束时间
 * @returns xx天xx时xx分
 */
export const dateDiffer = (
  data1: string | number,
  data2: string | number
): string => {
  const start = +new Date(data1) / 1000
  const end = +new Date(data2) / 1000
  const diff = end - start;
  const D = Math.floor(diff / 60 / 60 / 24);
  const H = Math.floor((diff / 60 / 60) % 24);
  const M = Math.floor((diff / 60) % 60);
// 优化 如果为0 则不显示
  let result = '';
  if (D > 0) {
    result += `${D}天`;
  }
  if (H > 0) {
    result += `${H}时`;
  }
  if (M > 0 || result === '') {
    result += `${M}分`;
  }
  return result;
}