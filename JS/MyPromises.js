const promise = orderIphone("phone");
promise.then(
  function (data) {
    console.log("On Resolved", data);
  }
).catch(err=>{
    console.log('in catch callback', err);
}).then(data=>{
    console.log("2nd resolve", data)
})

function orderIphone(name) {
  return new Promise((resolve, reject) => {
    // resolve("RESOLVED");
    reject("REJECTED");
  
  })
  
  
//   .catch(err=>{
//     console.log('This err is thrown when trying to create a new project', err)
//   }).then(data=>{
//     console.log('resolved in promise creation')
//   })
}
