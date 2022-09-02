const Http= require("http");
// importing http module

// creating a server
// takes a function as a parameter ==>callback
// it takes two objects as parameter req and res
const server= Http.createServer((req,res)=>{
console.log(req);

// req.url()==> gives info abut which webapge  url client is requesting
    // write method of res
    if(req.url==="/"){
    // res.write("hello, welcome to our website")
    // ending the response
    res.end("hello, welcome to our website") 
    // if we run this code our programme will not exit as we want our serverv to keep listening at port  5000
    // go  to localhost :5000 and see .write() method being rendered}
    }

    if(req.url==="/about"){
        res.end("hello, this is about us") 

    }

    // setting a default response
    // here wa can also render  html
    res.end(
    `<h1>OOPS!</h1>
    <p> Page not found </p>
    <a href="/"></a>`
    )
})


// declaring at which port server will liten to using .listen method
server.listen(5000)