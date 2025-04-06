import React, { useState, useEffect } from "react"
import s from './style.module.less'
import { useNavigate } from 'react-router-dom'
import {
  Cell, Button
} from 'zarm';
import { getUserInfo } from '@/api'

const User = () => {
  const navigate = useNavigate()
  const storedUserInfo = localStorage.getItem('userInfo');
  const [user, setUser] = useState({
    username: localStorage.getItem('username') || '',
    signature: '',
    avatar: ''
  })

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('userInfo')
    navigate('/login')
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // 优先使用 localStorage 中的用户信息
        if (storedUserInfo) {
          const userInfo = JSON.parse(storedUserInfo);
          setUser(prev => ({
            ...prev,
            signature: userInfo.signature || '这个家伙很懒，什么都没有留下',
            avatar: userInfo.avatar || '//s.yezgea02.com/1616032174786/cryptocurrency.png'
          }));
        } else {
          const { data } = await getUserInfo();
          setUser(prev => ({
            ...prev,
            signature: data.signature || '这个家伙很懒，什么都没有留下',
            avatar: data.avatar || '//s.yezgea02.com/1616032174786/cryptocurrency.png'
          }));
          localStorage.setItem('userInfo', JSON.stringify(data));
        }
      } catch (err) {
        console.error('获取用户信息失败:', err);
      }
    };
    fetchUserInfo();
  }, [storedUserInfo]);

  return (
    <div className={s.user}>
      <div className={s.head}>
        <div className={s.info}>
          <span>昵称：{user.username}</span>
          <span>
            <img 
              style={{width: 30, height: 30, verticalAlign: '-10px'}} 
              src={user.avatar} 
              alt="" 
            />
            <b>{user.signature}</b>
          </span>
        </div>
        <img 
          src={user.avatar} 
          alt="" 
          className={s.avatar} 
          style={{width: 60, height: 60, borderRadius: 8}} 
        />
      </div>
      <div className={s.content}>
        <Cell 
          hasArrow
          title="用户信息修改"
          onClick={() => { navigate('/userinfo') }}
          icon={<img style={{width:20,verticalAlign:'-7px'}} src={user.avatar} />}
        />
        <Cell 
          hasArrow
          title="重置密码"
          onClick={() => { navigate('/account') }}
          icon={<img style={{width:20,verticalAlign:'-7px'}} src={user.avatar} />}
        />
        <Cell 
          hasArrow
          title="关于我们"
          onClick={() => { navigate('/about') }}
          icon={<img style={{width:20,verticalAlign:'-7px'}} src={user.avatar} />}
        />
      </div>
      <Button className={s.logout} block theme="danger" onClick={logout}>退出登录</Button>
    </div>
  )
}

export default User;