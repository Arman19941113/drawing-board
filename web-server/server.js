const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')

if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
    process.chdir(path.join(__dirname))
    console.log('Installing packages. This might take a couple of minutes.')
    execSync('yarn install -s', { stdio: 'inherit' })
}

const Koa = require('koa')
const koaStatic = require('koa-static')

const app = new Koa()

app.use(koaStatic(path.join(__dirname, '../web-dist')))

app.use(ctx => {
    const content = fs.readFileSync(path.join(__dirname, '../web-dist/index.html'), 'utf-8')
    ctx.response.type = 'html'
    ctx.response.body = content
})

console.log('listening at: http://localhost:3000/')
app.listen(3000)
execSync('open http://localhost:3000/', { stdio: 'ignore' })
