// const cart = ["shoes", "pants"];
// createOrder(cart);


// const promise= createOrder(cart)

// //orderId  we will be given by then and called automatically
// promise.then( function (orderId) {
//     proceedToPay(orderId);
//   })


const user =fetch('https://jsonplaceholder.typicode.com/todos/1')

user.then(data=>{
    console.log('data', data);
})