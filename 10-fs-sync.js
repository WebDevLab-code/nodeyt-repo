const {readFileSync, writeFileSync} = require('fs')
console.log('start'); //1
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// flag a => append
writeFileSync('./content/result.txt',`combine result: ${first} & ${second}`,{flag:'a'})
console.log('done'); //2
console.log('next'); //3
