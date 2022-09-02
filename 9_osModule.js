// build in modules
const os = require('os');


// info of current user
const user = os.userInfo();
console.log(user);

// methds retiurns system uptime in seconds
console.log(`system uptime is ${os.uptime()} seconds`)

// about os info
const currrentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currrentOS);

