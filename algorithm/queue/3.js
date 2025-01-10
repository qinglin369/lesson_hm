// 类的正常运行
class AutoExpandarryQueue {
    #nums; // 数组 私有 es6
    #front = 0 ;// 队头 内存的优化相关
    #queueSize = 0; // 队列长度

    constructor(capacity) {
        // 分配了capacity个单位连续的内存空间
        // 这段内存就到缓存区了
        this.#nums = new Array(capacity);
    } 
    
    get capacity() {
        // todo whatever
        return this.#nums.length;
    }

    get size() {
        return this.#queueSize;
    }

    isEmpty() {
        return this.#queueSize === 0;
    }
    push(num) {
        if (this.size === this.capacity) {
            this.#expendCapacity();
        }
    }
    #expendCapacity() {
        // 地址 1000 要准确扩容，
        // 要重新分配,搬运元数据
        const newCapacity = this.capacity * 2;
        const newArr = new Array(newCapacity);// 全新空间
        for (let i = 0; i < this.size; i++) {
            newArry[i] = this.#nums[(this.#front + i) % this.capacity];
        }
        this.#nums = newArr;//原来内存地址被释放

}

}