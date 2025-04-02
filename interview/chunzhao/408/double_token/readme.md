# 获取token鉴权
- JWT JSON Web Token

- 单个token 长时间 不安全(容易被人截获)

- 验证access token   refresh token
 - acess token 负责验证功能 expiresIn 短一些, 安全
 refresh_token
 - 401 acess_token 失效
  refrensh_token -> /api/refresh
  新的token 
 - 实现无感刷新