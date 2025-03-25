/**
 * 快速排序函数，对给定的数组进行排序
 * @param {Array} arr - 需要排序的数组
 * @returns {Array} - 排序好的数组
 */
function quickSort(arr) {
    // 处理边界情况，如果数组长度小于等于 1，直接返回数组
    if (arr.length <= 1) {
      return arr;
    }
    // 选择数组中间的元素作为基准值
    const pivot = arr[Math.floor(arr.length / 2)];
    // 筛选出所有小于基准值的元素
    const left = arr.filter(x => x < pivot);
    // 筛选出所有等于基准值的元素
    const middle = arr.filter(x => x === pivot);
    // 筛选出所有大于基准值的元素
    const right = arr.filter(x => x > pivot);
    // 递归排序左右子数组，并将结果合并
    return quickSort(left).concat(middle, quickSort(right));
  }
  
  // 示例用法
  const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
  const sortedArray = quickSort(unsortedArray);
 // 将数组转换为字符串输出，避免换行
 console.log(sortedArray.join(', '));