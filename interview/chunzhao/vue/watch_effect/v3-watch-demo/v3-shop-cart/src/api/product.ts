import type { Product } from './product'


// 下划线 表示私有变量
const _products: Product[] = [
    { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
    { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
    { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 }
  ];

  export const getProducts = () => {
    return new Promise<Product[]>((resolve) => {
      setTimeout(() => {
        resolve(_products) 
      },2000)
      
    })
  }