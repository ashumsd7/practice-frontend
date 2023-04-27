// // const cart = ["shoes", "pants"];
// // createOrder(cart);

// const promise = createOrder(cart);

// // //orderId  we will be given by then and called automatically

// //Promise Chaining

// promise
//   .then((orderId) => proceedToPay(orderId))
//   .then((payInfo) => showOrderSummary(payInfo))
//   .then((payInfo) => updateWallet(payInfo));

// const user = fetch("https://jsonplaceholder.typicode.com/todos/1");

// user.then((data) => {
//   console.log("data", data);
// });

// showOrderSummary(payInfo);
// updateWallet();

//create a promise

const cart = ["shoes", "money", "currency"];

createOrder(cart)
  .then((orderId) => {
    console.log("order ID is", orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((res) => {
    console.log("is payment successful", res);
  })
  .catch((err) => {
    console.error("ERROR: ", err);
  }).then(orderId=>{
    console.log('CHECK it runs pr not', orderId);
  })

//____________________
//create a promise
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // write a logic to resolve and reject the promise
    if (true) {
      const orderId = "OD12345";
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    } else {
      const err = new Error("PROMISE IS REJECTED WITH SOME REASON");
      reject(err);
    }
  });

  return promise;
}

function proceedToPayment(orderId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("PAYMENT Failed");
    }, 2000);
  });
}
