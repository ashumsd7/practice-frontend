const promise = callAPI();
promise.then((data) => {
  console.log("1st promise resolve",data);
  return new Promise(res=>setTimeout(() => { res('go now2') }, 1000))
}).then(res=>{
    console.log('2nd Promise resolve',res);
})

console.log("Normal code");

function callAPI() {
  return new Promise((res) => {
    setTimeout(() => {
      res("go now");
    }, 2000);
  });
}
