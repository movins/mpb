const Make = require('./make')
const Proto = require('./proto')

console.info('======================build======================')
const args = process.argv.slice(2)
if (args.length < 3) {
    console.info('build=======error: args error', args)
}
const dir = process.cwd()
const [type, proto, publish, checks, dev] = args
console.info('build======================start')

const root = `${dir}\\${proto}`
const out = `${dir}\\${publish}`
const filters = checks.split(',')

console.info('build===type:', type)
console.info('build===root:', root)
console.info('build===out:', out)

new Make(type, root, out, dev).run()
new Proto(type, root, out, filters, dev).run()

console.info('build======================end')
