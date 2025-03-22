import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { getProducts } from '../api/product';

// export 使得外部文件也能使用该类型,避免重复定义相同的类型。
export interface Product {
  id: number;
  title: string;
  price: number;
  inventory: number;
}

export const useProductStore = defineStore('product', () => {
  const products = ref([] as Product[]) // 断言
  
  const loadProducts = async () => {
    // 直接[]替换为返回的数组
    products.value = await getProducts()
  }

  onMounted(() => {
   loadProducts() 
  })

  return {
    products,
  }
})