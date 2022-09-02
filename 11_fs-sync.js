const {readFileSync, writeFileSync}= require('fs');
const first = readFileSync('./contents/first.txt','utf8')
const second = readFileSync('./contents/second.txt','utf8')
console.log(first)
console.log(second)


// writeFile Sync creates a new file if not present in the directory

writeFileSync('./contents/result-sync.txt',`here is the result: ${first},${second}`,{flag:'a'})
// flag = 'a' stand for append
// ALt method:  const fs= require('fs');
//                fs.readFileSync    ==> destructuring the object
// fs  can be done both syncronously and asyncronously
//reading file syncronously





