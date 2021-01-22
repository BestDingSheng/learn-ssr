const Koa = require('koa');
const Router = require('koa-router');
const app =  new Koa();
const router = new Router();
const Vue =  require('vue');
const VueServerRenderer = require('vue-server-renderer')
const fs = require('fs');
const path = require('path');

const vm = new Vue({
    data:{
        name: 'zf',
    },
    template: '<div>hello {{name}}</div>'
})

const template = fs.readFileSync(path.resolve(__dirname,'template.html'),'utf-8')

router.get('/', async (ctx) => {
//   ctx.body = 'hello';
    ctx.body = await VueServerRenderer.createRenderer(
        {template}
    ).renderToString(vm)
});

app.use(router.routes())

app.listen(3000, function(){
    console.log('1234')
});




// nodemon server.js