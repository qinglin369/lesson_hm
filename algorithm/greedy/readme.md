# greedy 贪心算法

 贪心 策略算法, 解决优化问题, 每一步都选择当前来看最优的方案，
 期待最终达到全局最优。

 - 全局最优解
 - 局部最优解 子结构

 时间复杂度： O(n)

 该贪心时就贪心，不用动态规划


- 硬币找零问题

- 贪心 时间有优势， 优化算法
 -贪心表面上 两重循环

外层 while 执行：amount/Math.min(Coins) 次 设为 K次小于n(最坏的情况)
内层O(n),最终循环次数为K*n

[1,20,50] 60 -> dp
greedy 11 次
 - 都有子结构
贪心 局部最优解 不等于 全局最优解
dp 局部最优解 等于 全局最优解
0 -> amount
f[]


可以递归解决的问题，也可以用动态规划解决(不考虑过程，只考虑结果)
考虑过程，用回溯