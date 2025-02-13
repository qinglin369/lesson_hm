const fs = require('fs');
const res = [];
// 多个异步任务同步化的解决方案
// 1. 回调地狱 麻烦 可读性极具降低
// 包袱可以抖出 

// fs.readFile('./a.txt', (err, data) => {
//   // node 后端的哲学， 容错第一
//   // 方方面面
//   if (err) {
//     console.log(err);
//     return;
//   }
//   // 回调函数 最早的异步解决方案
//   // 二进制格式  Buffer
//   // console.log(data.toString());
//   res.push(data.toString())
//   // a.txt -> b.txt
//   fs.readFile('./b.txt', (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     res.push(data.toString())
//     fs.readFile('./c.txt', (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       res.push(data.toString())
//       console.log(res)
//     })
//   })
// })

// es6 提供的 promise， 解决回调地狱
const readFilePromise = (url) => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

// readFilePromise('./a.txt')
//   .then(data => {
//     res.push(data.toString())
//     return readFilePromise('./b.txt')// 链式调用 返回的是一个promise
//   })
//   .then((txt2) => {
//     res.push(txt2.toString()); // 将 Buffer 转换为字符串
//     return readFilePromise('./c.txt')
//   })
//  .then((txt3) => {
//   res.push(txt3.toString()); 
//   //  console.log(res)
//  })
//  .catch(err => {
//    console.log(err);
//  })
//  .finally(() => {
//    console.log('finally', res)
//  })

//  console.log(res)


// es8 提供的 async await

(async () => {
  const textA = await readFilePromise('./a.txt');
  res.push(textA.toString());
  const textB = await readFilePromise('./b.txt');
  res.push(textB.toString());
  const textC = await readFilePromise('./c.txt');
  res.push(textC.toString());
  console.log(res)

})();