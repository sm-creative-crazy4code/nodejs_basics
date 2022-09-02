
const {readFile, writeFile}= require('fs');
//passing a  callback function
//setting of callback hell 
readFile('./contents/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    
    const first =  result;
    readFile('./contents/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        
        const second =  result;
        writeFile('./contents/result-async.txt',`here is the result: ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result)

    })
})
})

