const {readFile, writeFile} = require('fs')
console.log('start'); //1
readFile('./content/first.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',`combine async result: ${first} + ${second} `,{flag:'a'},(err, result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
            console.log('done'); //3
        })
    })
})
console.log('next'); //2