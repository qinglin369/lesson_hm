const Koa = require('koa');
const app = new Koa();
// 中间件 有顺序

const one =  (ctx, next) => {
  console.log('one');
   next();
   console.log('one end');
  
}

const two =  (ctx, next) => {
 
  console.log('two');
  next();   
  console.log('two end');
}
const three =  (ctx, next) => {
  console.log('three');
  next(); 
  console.log('three end');
}