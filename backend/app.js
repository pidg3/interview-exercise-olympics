const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();

var Router = require('koa-router');
var router = new Router();

const getCsvData = require('./parser.js').getCsvData;

router.get('/medals', async (ctx, next) => {
  const data = await getCsvData();
  const limit = Number(ctx.request.query.limit || 10);
  const offset = Number(ctx.request.query.offset || 0);
  const startPoint = limit * offset;
  const endPoint = startPoint + limit;
  ctx.body = data.slice(startPoint, endPoint);
});

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen(4000);

exports.server = server;