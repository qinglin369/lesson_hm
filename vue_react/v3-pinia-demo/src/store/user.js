// 全局共享的用户状态
import { defineStore } from 'pinia'
import { ref,reactive } from 'vue'
// hooks 编程
export const useUserStore = defineStore('user',()=>{
     const isLogin = ref(false)
     const toLogin=()=>{
         isLogin.value=true
     }
     const toLogout=()=>{
         isLogin.value=false
     }
     const userInfo = reactive({
         name:'',
         avatar:'',
         message:'',
         uid:null
         
        })
        const setUserInfo=()=>{
            userInfo.name='坐镇指挥'
            userInfo.avatar='https://p9-passport.byteacctimg.com/img/user-avatar/0b2ae1c6f3318d09010402f3cdb7718c~130x130.awebp'
            userInfo.message=10
            userInfo.uid=2232421950956618
        }
     return {
         isLogin,
         toLogin,
         toLogout,
         userInfo,
         setUserInfo
     }
 })