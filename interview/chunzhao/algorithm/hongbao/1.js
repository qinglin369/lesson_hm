function hongbao (total,num) {
    const arr = [];
    let restAmount = total; // 剩余金额初始化
    let restNum = num;

    for ( let i = 0; i < num - 1; i++) {
        // 生成随机金额并保留两位小数，然后转换为浮点数
        let amount = parseFloat((Math.random() * (restAmount / restNum * 2)).toFixed(2));
        restAmount -= amount;
        restNum--;
        arr.push(amount);
    }
    // 最后一个红包直接使用剩余金额并保留两位小数，再转换为浮点数
    arr.push(parseFloat(restAmount.toFixed(2)));

    return arr;
}

console.log(hongbao(25,6));