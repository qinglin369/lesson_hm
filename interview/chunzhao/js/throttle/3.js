
function throttle(func, wait, options={}) {
    // 定时器
    var timeout, 
        // 函数上下文
        context, 
        // 函数参数
        args, 
        // 函数执行结果
        result;
    // 上次执行时间
    var previous = 0;
    // 若未提供 options，初始化为空对象
    // if (!options) options = {}; 用es6语法替代

    // 定时器回调函数
    const later = function() {
        // 更新上次执行时间
        previous = options.leading === false ? 0 : new Date().getTime();
        // 清除定时器
        timeout = null;
        // 执行函数
        func.apply(context, args);
        // 若没有定时器，清空上下文和参数
        if (!timeout) context = args = null;
    };

    // 节流函数
    var throttled = function() {
        // 当前时间
        var now = new Date().getTime();
        // 若 leading 为 false，更新上次执行时间
        if (!previous && options.leading === false) previous = now;
        // 计算剩余时间
        var remaining = wait - (now - previous);
        // 保存上下文和参数
        context = this;
        args = arguments;
        // 若剩余时间小于等于 0 或大于等待时间
        if (remaining <= 0 || remaining > wait) {
            // 清除定时器
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            // 更新上次执行时间
            previous = now;
            // 执行函数
            func.apply(context, args);
            // 若没有定时器，清空上下文和参数
            if (!timeout) context = args = null;
        // 若没有定时器且 trailing 不为 false
        } else if (!timeout && options.trailing !== false) {
            // 设置定时器
            timeout = setTimeout(later, remaining);
        }
    };

    // 取消节流函数
    throttled.cancel = function() {
        // 清除定时器
        clearTimeout(timeout);
        // 重置上次执行时间
        previous = 0;
        // 清空定时器
        timeout = null;
    }

    return throttled;
}