//settimeout function
setTimeout(() => {
    console.log("hello, world")
}, 2000);
//call back function
async function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
greet("Ali", () => {
    console.log("developers")
})
//promises then
let promise = new Promise((resolve,) => {
    resolve("sucess");
})
promise.then((data) => {
    console.log(data)
})
//promises catch
let a = new Promise((resolve, reject) => {
    reject("err")
})
a.catch((err) => {
    console.log(err)
})
//async function
async function show() {
    return "My name is ..........";
}
show().then((data) => {
    console.log(data)
})

function getdata() {
    return new Promise((resolve,) => {
        setTimeout(() => {
            resolve("data recive ")
        }, 2000);
    })
}
async function ali() {
    let data = await getdata();
    console.log(data)
}
ali();