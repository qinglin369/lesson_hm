import React, {
  useState,
  useRef, // dom 或对象 ref 
  useCallback, // 缓存函数
  useEffect 
} from 'react';
// 代码风格要介绍 写注释 驼峰命名 函数式编程 封装 模块话 伪代码
import {
  Cell,
  Input,
  Button,
  Checkbox,
  Toast,
} from 'zarm';
import s from './style.module.less'
import cx from 'classnames';// 用于合并 className，动态生成 className
import CustomIcon from '@/components/CustomIcon';
import { login, register, getUserInfo } from '@/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = '登录'
  }, [])
  
  const onSubmit = async () => {
    if (!username) {
      Toast.show('请输入账号');
      return;
    }
    if (!password) {
      Toast.show('请输入密码');
      return;
    }
    try {
      if (type == 'login') {
        const { data } = await login(username, password);
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', username);
        
        // 获取用户信息并保存
        const userInfo = await getUserInfo();
        localStorage.setItem('userInfo', JSON.stringify(userInfo.data));
        
        Toast.show('登录成功');
        navigate('/userinfo');
      }
      if (type == 'register') {
        const { data } = await register(username, password);
        Toast.show('注册成功，请登录');
        setType('login');
      }
    } catch(err) {
      Toast.show(err.message || '操作失败');
    }  
  }

  return (
    <div className={s.auth}>
      <div className={s.head} />
      <div className={s.tab}>
        {/* <span :class={s.active:type='login'}></span> */}
        <span className={cx({ [ s.active ]: type== 'login'})} onClick={() => setType('login')}>登录</span>
        <span className={cx({ [ s.active ]: type== 'register'})} onClick={() => setType('register')}>注册</span>
      </div>
      <div className={s.form}>
        <Cell icon={<CustomIcon type="zhanghao"/>}>
          <Input 
            clearable
            type="text"
            placeholder='请输入账号'
            onChange={(value) => setUsername(value)}
          />
        </Cell>
        <Cell icon={<CustomIcon type="mima"/>}>
          <Input 
            clearable
            type="password"
            placeholder='请输入密码'
            onChange={(value) => setPassword(value)}
          />
        </Cell>
        {/* { type=="register" ? (<Cell icon={<CustomIcon type="mima"/>}>
          <Input 
            clearable
            type="password"
            placeholder='请重复输入密码'
            onChange={(value) => setPassword(value)}
          />
          </Cell>): null
        } */}
        <div className={s.operation}>
          {
            type=="register" ? (<div className={s.agree}>
              <Checkbox />
              <label className="text-light">阅读并同意<a>《使用条款》</a></label>
            </div>) : null
          }
          <Button onClick={onSubmit} block theme="primary">{type=="login"?"登录":"注册"}</Button>
        </div>
      </div>
    </div>
  )
}

export default Login;