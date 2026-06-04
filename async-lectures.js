let myPromise = new Promise(function (resolve, reject) {

    success = false;

    // resolve or reject
    if (success) {
        resolve("Payment successful");
    } else {
        reject("Payment Failed");
    }
});
console.log(myPromise);