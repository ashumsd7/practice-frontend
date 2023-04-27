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

const promise = createOrder(cart); // gives a order id
console.log('promise',promise)
promise
  .then((data) => {
    console.log("order ID is", data);
  })
  .catch((err) => {
    console.error("ERROR: ", err);
  });
// proceedToPayment(orderId);

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
