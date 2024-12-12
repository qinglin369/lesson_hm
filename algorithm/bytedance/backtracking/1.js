const letterMap = ["", "", "abc", "def", "ghi",
     "jkl", "mno", "pqrs", "tuv", "wxyz"];

     function letterCombinations(digits){
        // 回溯算法
        const result = [];
        const path = [];// 某种路径
        if(digits.length === 0) {
            return result;
        }
        function backTracking(index){
            const digits = digits[index] - '0';
            // console.log(digits);
            const letters = letterMap[digits];
            // console.log(letters);
            for(let i = 0; i < letters.length; i++){
                // letters[i] 这一次path 收集的开始
                path.push(letters[i]);
                if(index === digits.length - 1){
                    result.push(path.join(''));// 开始
                }else{
                    backTracking(index + 1);
                }
                path.pop();
            }
        }
        backTracking(0);
        return result;
     }
     letterCombinations('23');