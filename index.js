const koa = require('koa');
const app = koa();

app.use(function *(){
  this.body = `
  <html>
  <h1>语音自动转文字</h1>
  <div>
    项目描述: 远程语音会议系统,类似于临时聊天群。特点是所有用户都可以发语音,语音会自动转成文字,方便归档和记录action。主持人可以设置一定的发言顺序。
</div>
  <div>
    报名人: 加缪 青栀
</div>
</html>
  `;
});

app.listen(3000);