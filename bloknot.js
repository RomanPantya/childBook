const FULFILLED = "fulfilled";
const PENDING = "pending";
const REJECTED = "rejected";

class myPromise {
constructor(executor) {
    this.state = PENDING;
    this.result = undefined;
    this.onFulfilledFn = [];
    this.onRejectedFn = [];

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.result = value;
        this.onFulfilledFn.forEach((fn) => fn(value))
      }
    };

    const reject = (error) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.result = error;
        this.onRejectedFn.forEach((fn) => fn(error));
      }

    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
}
then(onFulfilled, onRejected) {
  return new myPromise((resolve, reject) => {
  if (this.state === PENDING) {
    if (onFulfilled) {
    this.onFulfilledFn.push(() => {
      onFulfilled
    });
  }
  if (onRejected) {
    this.onRejectedFn.push(() => {
      onRejected
    });
  }
  return;
}
  if (onFulfilled && this.state === FULFILLED) {
    onFulfilled(() => {
    this.result;
    return;
  });
  if (onRejected && this.state === REJECTED) {
    onRejected(this.result);
    return;
  }
}
catch(onRejected) {
  return this.then(null, onRejected)
}

}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("success"), 2000);
 })
 .then((value) => {
  return value + " first then";
 })
 .then((value) => {
  return value + " second then";
 })
 .then((value) => {
  console.log(value)
 });
 
 
//  console.log(promise);
// .catch((err) => {
//   console.log("first: ", err);
//   return "all";
// })
// .then((el) => {
//   console.log("first: ", el);
//   return "ok";
// })




// setTimeout(() => {
//   //console.log(promise);
  
//  }, 400);

// promise
//   .then((res) => {
//     return new Promise((resolve, reject) => {
//       resolve("resolve1" + "!!!");
//     })

//   }, (err) => {
//     console.log("then1: ", err);

//   }).then((value) => {
// console.log(11, value);
//   });
