// 通用的request 业务
import { ref,watcheffect } from 'vue'
/**
 * 
 * @param requestFn 异步请求函数
 */

// requestFn 可以是各种请求函数，将其抽象
export function useRequest(requestFn:() => void) {
    const data = ref([])// 抽象
    const loading = ref(true);
    const error = ref(null);
    
    const fetchData = async () => {
        try {
            const response = await requestFn();
            data.value = response.data;
            error.value = null;

        } catch (err) {
            error.value = err;
            data.value = [];
        } finally {
            loading.value = false;
        }
        watcheffect(fetchData)
  
        
    }
    return {
        data,
        loading,
        error,
        fetchData
    }
}