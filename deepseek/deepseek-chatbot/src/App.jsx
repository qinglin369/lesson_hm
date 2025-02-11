// 导入 React 库中的 useState 和 useEffect 钩子
import React, { useState, useEffect } from 'react';
// 导入 axios 库，用于发送 HTTP 请求
import axios from 'axios';
// 导入 App 组件的样式文件
import './App.css';

/**
 * 与聊天 API 进行交互的异步函数
 * @param {Object} message - 包含消息内容的对象
 * @returns {Promise<Object>} - 返回 API 响应的数据
 */
const chatApi = async (message) => {
  // 请求行 method + url + http 版本
  // 5173 -> 3000 跨域？同源策略 cors 服务器端， jsonp? 
  // get 简单请求 
  // post 复杂请求
  // 使用 axios 发送 POST 请求到本地服务器的 chatai 端点
  const response = await axios.post('http://localhost:3000/chatai', 
    // 请求体 json
    message, {
      // 请求头 
      // 设置请求头的 Content-Type 为 application/json
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  // 返回 API 响应的数据
  return response.data;
}

/**
 * 聊天应用的主组件
 * @returns {JSX.Element} - 返回渲染的聊天界面
 */
// react 内置 hooks 函数  副作用
const App = () => {
  // input question react 全面hooks 
  // 使用 useState 钩子创建一个状态变量 question，初始值为空字符串
  const [question, setQuestion] = useState('');
  // llm history 
  // 使用 useState 钩子创建一个状态变量 conversation，初始值为空数组
  const [conversation, setConversation] = useState([]);
  // 
  // 使用 useState 钩子创建一个状态变量 loading，初始值为 false
  const [loading, setLoading] = useState(false);

  // useEffect 不能直接使用 async await
  /**
   * 在组件挂载和更新时从本地存储中加载聊天记录
   */
  useEffect(() => {
    // 本地存储
    // 从本地存储中获取 conversation 数据
    const storedConversation = localStorage.getItem('conversation');
    if (storedConversation) {
      // 如果存在，则解析 JSON 并设置 conversation 状态
      setConversation(JSON.parse(storedConversation));
    }

    // 副作用 mounted  updated unmouted 。。。。
    // await chatApi()
    // const callChatAPI = async () => {
    //   await chatApi({message: '你好'})
    // }
    // callChatAPI()
  }, [])

  /**
   * 处理用户提问的异步函数
   */
  const askQuestion = async () => {
    // 参数校验
    // 如果问题为空，则不执行任何操作
    if (!question.trim()) {
      return ;
    }
    // setConversation([

    // ])
    // 高级语法 函数式更新
    // 使用函数式更新方式将新问题添加到 conversation 状态中
    setConversation((prevConversation) => [
      ...prevConversation,
      {
        question: question,
        answer: '等待回答...'
      }
    ])

    // 设置 loading 状态为 true，表示正在加载
    setLoading(true);
    // LLM 程序健壮性
    try {
      // 构造发送给 API 的消息
      const message = `你是一个聪明的机器人, 我想知道${question}`;
      // 调用 chatApi 函数发送消息并等待响应
      const response = await chatApi({message});
      // console.log(response);
      // 更新 conversation 状态，将最后一个问题的答案替换为 API 响应
      setConversation((prevConversation) => {
        prevConversation[prevConversation.length - 1].answer = response
        // 将更新后的 conversation 存储到本地存储中
        localStorage.setItem('conversation', JSON.stringify(prevConversation))
        // 返回一个全新的状态 独立状态
        // 返回更新后的 conversation 状态
        return [
          ...prevConversation
        ]

      })
      
      
    
    } catch(error) {
      // 如果发生错误，打印警告信息
      console.warn(error);
    } finally {
      // 一定最后执行
      // 无论请求成功与否，都将 loading 状态设置为 false，并清空 question 输入框
      setLoading(false);
      setQuestion('');
    }

  }

  /**
   * 渲染聊天界面的 JSX 元素
   * @returns {JSX.Element} - 返回渲染的聊天界面
   */
  return (
    <div className="chat-container" style={{position: 'relative'}}>
      <p className="chat-title">我是ollama + deepseek 本地大模型</p>
      {
        // 遍历 conversation 数组，渲染每个聊天消息
        conversation.map((item, index) => (
          <div key={index} className="chat-message">
            <div className="chat-question">
              <span className="el-tag el0tag--large">me:</span> {item.question}
            </div>
            <div className="chat-answer">
              {item.answer.content}
              <span className="el-tag el-tag--large">ai:</span>
            </div>
          </div>
        ))
      }
      <div className="chat-input">
        <input 
          type="text" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)}
          // @keyup.enter={askQuestion}
          onKeyUp={(e) => e.key === 'Enter' && askQuestion()}
          style={{width: '80%'}} 
        />
        <button onClick={askQuestion}>提交</button>
      </div>
      { loading && (
        <div className="loading-container">
          <p>加载中...</p>
        </div>
      )}
    </div>
  )
}

// 导出 App 组件作为默认导出
export default App;
