// const promise = orderIphone("phone");
// promise.then(
//   function (data) {
//     console.log("On Resolved", data);
//   }
// ).catch(err=>{
//     console.log('in catch callback', err);
// }).then(data=>{
//     console.log("2nd resolve", data)
// })

// function orderIphone(name) {
//   return new Promise((resolve, reject) => {
//     // resolve("RESOLVED");
//     reject("REJECTED");
  
//   })
  
  
// //   .catch(err=>{
// //     console.log('This err is thrown when trying to create a new project', err)
// //   }).then(data=>{
// //     console.log('resolved in promise creation')
// //   })
// }


// ----
// PROMISE API

// const promise= Promise.all([

//     new Promise(res=>setTimeout(() => { res('resolved 1') }, 1000)),
//     new Promise(res=>setTimeout(() => { res('resolved 2') }, 2000)),
//     new Promise(res=>setTimeout(() => { res('resolved 3') }, 4000))
// ])

// console.log(promise)
// promise.then(res=>{
//     console.log(res, 'sssss')
// })


//allSettled
// const promise2= Promise.allSettled([

//     new Promise(res=>setTimeout(() => { res('resolved 1') }, 1000)),
//     new Promise((res,rej)=>setTimeout(() => { rej('resolved 2') }, 2000)),
//     new Promise(res=>setTimeout(() => { res('resolved 3') }, 4000))
// ])

// console.log(promise2)
// promise2.then(res=>{
//     console.log(res, 'sssss')
// })


//race
const promise3= Promise.race([

    new Promise(res=>setTimeout(() => { res('resolved 1') }, 1000)),
    new Promise((res,rej)=>setTimeout(() => { rej('resolved 2') }, 2000)),
    new Promise(res=>setTimeout(() => { res('resolved 3') }, 4000))
])

console.log(promise3)
promise3.then(res=>{
    console.log(res, 'sssss')
})

// any