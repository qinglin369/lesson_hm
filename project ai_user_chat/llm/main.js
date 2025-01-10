// node 内置的http 模块 
const http = require('http');
const OpenAi = require('openai');
const url = require('url');// node 内置

const client = new OpenAi({
    apiKey:'mmmmmmm',
    baseUrl:'ccccc'
});

const getCompletion =  async (prompt, model="gpt-3.5-turbo") => {
  // 用户提的问题
  const messages = [{
    role: 'user',
    content: prompt
  }];
  // AIGC chat 接口
  const response = await client.chat.completions.create({
    model: model,
    messages: messages,
    // LLM 生成内容的随机性
    temperature: 0
  }) 
  return response.choices[0].message.content
}

const server = http.createServer(async (req, res) => {

  // 设置跨域访问的响应头
  res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源访问，也可以指定具体的域名，如'http://example.com'
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 允许的请求方法
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头
  
  const parsedUrl = url.parse(req.url, true);
  const queryObj = parsedUrl.query;

  console.log(queryObj);

  console.log(queryObj.data);

  const prompt = `
  请根据 ${queryObj.data}数据，回答${queryObj.question} 这个问题 ,注意你的回答仅限于提供的数据${queryObj.data}
  `
  const result = await getCompletion(prompt)

  let info = {
    result
  }

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/json')
  res.end(JSON.stringify(info))
  
})

server.listen(1314)