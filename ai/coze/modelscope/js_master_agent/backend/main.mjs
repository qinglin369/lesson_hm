import OpenAI from "openai";
// es5 js 没有模块化问题 简单 不需要模块化， 交给函数就可以了
//入口文件
//mjs es6 模块化（支持模块化的js--mjs）若没有m,则会报错


const client = new OpenAI({
  apiKey: "",
  baseURL:"https://api.302.ai/v1"
});


const main= async () => {
    //AIGC 图片
    const response = await client.images.generate({
      model: "dall-e-3",
      prompt: "A Ultraman flying through the universe.",
      n: 1,
      size: "1024x1024",
      
    });
    console.log(response.data[0].url)
}
main();