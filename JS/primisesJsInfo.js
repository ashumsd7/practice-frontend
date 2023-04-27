callAPI()
  .then(
    (resData) => {
      console.log("onFulfilled", resData);
    //   throw new Error("this Error thrown by choice in then")
    },
    (rejData) => {
      console.log("onRejected", rejData);
    }

    
  )
  .catch(err=>{
    console.log('ERR is',err)
  })
  .finally((data) => {
    console.log("I AM Finally",data);
  });

function callAPI() {
  return new Promise((res, rej) => {
     
    //   throw new Error('I am err from promise creation');
    // res('first')
    // setTimeout(() => {
    //     console.log('chala kya')
    //   res("RESOLVED");
    // }, 2000);
    // setTimeout(() => {
    //   rej("REJECTED");
    // }, 2000);

    rej('ERRRRRR')

  }).catch(err=>{
    console.log('THis is err where promise is created')
  })
}
