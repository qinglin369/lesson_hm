import React, { useEffect, useState } from 'react';
import { Button, Input, Toast, FilePicker } from 'zarm';
import { useNavigate } from 'react-router-dom';
// import Header from '@/components/Header';
import axios from 'axios';
import { 
  getUserInfo,
  updateSignature,
  uploadAvatar
} from '@/api'
// import { get, post } from '@/utils'
// import { baseUrl } from 'config'
import s from './style.module.less';

const CHUNK_SIZE = 1024 * 1024; // 1MB 分片大小

const UserInfo = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const [signature, setSignature] = useState('')
  const [avatar, setAvatar] = useState('')
  const [uploading, setUploading] = useState(false)
  const username = localStorage.getItem('username') || '';
  const storedUserInfo = localStorage.getItem('userInfo');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // 优先使用 localStorage 中的用户信息
        if (storedUserInfo) {
          const userInfo = JSON.parse(storedUserInfo);
          setUser(userInfo);
          setSignature(userInfo.signature || '');
          setAvatar(userInfo.avatar || '');
        } else {
          const { data } = await getUserInfo();
          setUser(data);
          setSignature(data.signature || '');
          setAvatar(data.avatar || '');
          localStorage.setItem('userInfo', JSON.stringify(data));
        }
      } catch (err) {
        Toast.show('获取用户信息失败');
      }
    };
    fetchUserInfo();
  }, [storedUserInfo]);

  // 获取用户信息
  // const getUserInfo = async () => {
  //   const { data } = await get('/api/user/get_userinfo');
  //   setUser(data);
  //   setAvatar(imgUrlTrans(data.avatar))
  //   setSignature(data.signature)
  // };

  const handleFileSelect = async (file) => {
    if (!file) return;
    
    if (file.size > 10 * 1024 * 1024) {
      Toast.show('文件大小不能超过10MB');
      return;
    }

    setUploading(true);
    try {
      const chunks = [];
      let start = 0;
      const fileSize = file.size;
      
      // 分片处理
      while (start < fileSize) {
        const chunk = file.slice(start, start + CHUNK_SIZE);
        chunks.push(chunk);
        start += CHUNK_SIZE;
      }

      // 上传分片
      const uploadPromises = chunks.map((chunk, index) => {
        const formData = new FormData();
        formData.append('file', chunk);
        formData.append('chunkIndex', index);
        formData.append('totalChunks', chunks.length);
        formData.append('filename', file.name);
        return uploadAvatar(formData);
      });

      await Promise.all(uploadPromises);
      Toast.show('头像上传成功');
      
      // 获取新的用户信息并更新 localStorage
      const { data } = await getUserInfo();
      setAvatar(data.avatar);
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (err) {
      Toast.show(err.message || '上传失败');
    } finally {
      setUploading(false);
    }
  };

  const save = async () => {
    try {
      await updateSignature(signature);
      // 更新 localStorage 中的用户信息
      const updatedUserInfo = { ...user, signature };
      localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
      Toast.show('修改成功');
      navigate('/user');
    } catch (err) {
      Toast.show(err.message || '修改失败');
    }
  }

  return <>
    {/* <Header title='用户信息' /> */}
    <div className={s.userinfo}>
      <h1>个人资料</h1>
      <div className={s.item}>
        <div className={s.title}>头像</div>
        <div className={s.avatar}>
          <img className={s.avatarUrl} src={avatar || '//s.yezgea02.com/1616032174786/cryptocurrency.png'} alt=""/>
          <div className={s.desc}>
            <span>支持 jpg、png、jpeg 格式大小 10MB 以内的图片</span>
            <FilePicker 
              className={s.filePicker} 
              onChange={handleFileSelect} 
              accept="image/*"
              disabled={uploading}
            >
              <Button className={s.upload} theme='primary' size='xs'>
                {uploading ? '上传中...' : '点击上传'}
              </Button>
            </FilePicker>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.title}>昵称</div>
        <div className={s.signature}>
          <Input
            disabled
            type="text"
            value={username}
            placeholder="用户名"
          />
        </div>
      </div>
      <div className={s.item}>
        <div className={s.title}>个性签名</div>
        <div className={s.signature}>
          <Input
            clearable
            type="text"
            value={signature}
            placeholder="请输入个性签名"
            onChange={(value) => setSignature(value)}
          />
        </div>
      </div>
      <Button onClick={save} style={{ marginTop: 50 }} block theme='primary'>保存</Button>
    </div>
  </>
};

export default UserInfo;