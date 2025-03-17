# 防抖节流
<!-- 和promise手写题一样，重要考题 -->

- 性能优化
 减少执行次数
- 防抖
 debounce 防抖 只执行最后一次
 setTimeout + clearTimeout
- 节流
 throttle 节流 每隔一段时间执行一次
- 手写
 - 简单版本
- 应用场景
  搜索框 ajaxSuggest (用户体验) debounce 
  窗口调整 resize debounce
  图片懒加载 throttle
- 进阶版本
 - leading 先执行一次
 - trailing 结束时执行一次
 - 取消等待中的执行 cancel
 - this 上下文和参数
 - 内存优化
