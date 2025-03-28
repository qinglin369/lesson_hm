import Redis from 'ioredis';// redis node js client

const redis = new Redis({
    host: '127.0.0.1', // Redis 服务器地址
    port: 6379, // Redis 服务器端口
    password: '123456' // Redis 密码
});
// key => value NOSQL JSON  非关系型数据库
const initialData = {
    "1702459181837": '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
    "1702459182837": '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
    "1702459188837": '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
  }

 // 列表
  export async function getAllNotes() {
    const data = await redis.hgetall('notes');
    // redis api collection mysql table
    if (Object.keys(data).length === 0) {
        // 数据格式是JSON
     await redis.hset('notes', initialData); // 批量插入数据
    }
    return await redis.hgetall('notes');
  }