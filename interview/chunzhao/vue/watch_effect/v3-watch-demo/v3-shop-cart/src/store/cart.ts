import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useProductStore } from './product'

type CartItem = {
  productId: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', () => {
  // <T>
  // vue3 vue2 区别？ 
  // vue3 全面支持 ts  99% 代码ts写的
  const items = ref<CartItem[]>([])
  const productStore = useProductStore()
  // items.value.push(1)


//   const totalPrice = computed(() => 
//     // 累加和
//     items.value.reduce((total, item) => {
//       // null
//       const product = productStore.products.find(p => p.id === item.productId)
//       // ES6 中的可选链操作符
//       return total + (product?.price || 0) * item.quantity
//     }, 0)
//  )

 const totalPrice = computed(() => {
    // 累加和
    return items.value.reduce((total, item) => {
      // find() 方法会遍历数组中的每个元素，并执行回调函数 p => p.id === item.productId。
      // 当 p.id 等于 item.productId 时，
      // 回调函数返回 true，此时 find() 方法会返回该元素 p，并将其赋值给 product 变量
      // null，p代表products 数组中的每一个元素
      const product = productStore.products.find(p => p.id === item.productId);
      // ES6 中的可选链操作符 如果 product 为 null 或 undefined，则表达式返回 undefined ,那么计算会是NaN
      return total + (product?.price || 0) * item.quantity;
    }, 0);// 0 reduce初始值
  });



  const getQuantity = (productId: number) => {
    const item = items.value.find(item => item.productId === productId)
    return item ? item.quantity: 0// 有就返回itme.quantity,购物车中没有该商品，返回0
  }

  const addToCart = (productId: number) => {
    const product = productStore.products.find(p => p.id === productId)
    if (!product) {
      return
    }

    const currentQuantity = getQuantity(productId)
    if (currentQuantity >= product.inventory) {
      return
    }

    const existingItem = items.value.find(item => item.productId === productId)
    if (existingItem) {
      existingItem.quantity++// 存在该商品，数量+1,不存在没法加，
    } else {
      items.value.push({
        productId,
        quantity: 1// 不存在该商品，将该商品添加到购物车中，数量为1
      })
    }

  }

  return {
    items,
    totalPrice,
    getQuantity,
    addToCart
  }
})