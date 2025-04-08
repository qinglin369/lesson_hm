function compareVersion(version1, version2) {
    const v1Parts = version1.split('.').map(Number);// 简写
    const v2Parts = version2.split('.').map(Number);
    // 找到最长的版本号长度
    const maxLength = Math.max(v1Parts.length, v2Parts.length);
    for (let i = 0; i < maxLength; i++) {
        const v1Part = v1Parts[i] || 0; // 如果版本号不存在，默认为0
        const v2Part = v2Parts[i] || 0; // 如果版本号不存在，默认为0
        if (v1Part > v2Part) {
            return 1; 
        } else if (v1Part < v2Part) {
            return -1; 
        }
        return 0;
    }
    // 全写，用箭头函数
    // const v2Parts = version2.split('.').map((part) => {
    //     return Number(part);
    // });
    // 或者
    // const v1Parts = version1.split('.').map(part => Number(part));

}