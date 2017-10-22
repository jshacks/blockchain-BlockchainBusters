const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const koaBody = require('koa-body');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

router.post('/', async (ctx) => {
    const file = ctx.request.body.files.file;
    console.log(`fingerprinting ${file.name}`);
    const cmd = `echoprint-codegen ${file.path}`;
    const { stdout } = await exec(cmd);
    const data = JSON.parse(stdout);
    ctx.set('Content-type', 'application/json');
    ctx.body = '{}';
    ctx.body = JSON.stringify(data[0]);
    fs.unlinkSync(file.path);
});

app.use(serve(path.join(__dirname, '/public')));
app.use(koaBody({ multipart: true }));
app.use(router.routes());

const port = process.env.PORT || 8080;
console.log(`echoprint server running on port ${port}`);
app.listen(port);
