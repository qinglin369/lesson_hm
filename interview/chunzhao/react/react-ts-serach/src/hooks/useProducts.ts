// use 开头
// store 数据状态从组件中剥离 共享
// 复用 响应式业务  自定义hooks函数 ，响应式业务封装
// products search 响应式业务
import {
    useState,
    useCallback,
    useEffect
  } from 'react'
  import { 
    getProducts, 
    searchProductByQuary 
  } from '@/api/products'
  import { debounce } from '@/utils/debounce'
  import { useProductStore } from '@/store/product'
  
  export const useProducts = () => {
    const [loading, setLoading] = useState(false)
    const { products, setProducts } = useProductStore()
  
    const fetchProdcuts = async () => {
      setLoading(true)
      try {
        const data = await getProducts()
        setProducts(data)
      } finally {
        setLoading(false)
      }
    }
  
    const searchProducts = useCallback(
      debounce(async (query: string) => {
        setLoading(true)
        try {
          const data = await searchProductByQuary(query);
          setProducts(data)
        } finally {
          setLoading(false)
        }
      }, 200),
      []
    )
  
    useEffect(() => {
      fetchProdcuts()
    }, [])
  
    return {
      loading, 
      products, 
      searchProducts
    }
  }