const path = require('path')
//path separator separates path of current user platform
console.log(path.sep)
//path .join jooins folder sseparated by path separators
const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath)

//base name  gives only the final basename
const base = path.basename(filePath);
console.log(base);

// .resole takes path segments and returns absolute path
const absolute= path.resolve(__dirname,"content","subfolder","test.txt")
console.log(absolute);