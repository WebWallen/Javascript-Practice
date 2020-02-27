// Promise is "pending" until it is broken (rejected) or fulfilled (resolved)
const willGetYouADog = new Promise((resolve, reject) => {
    // "Resolve" and "Reject" are callback functions passed into each promise
    const rand = Math.random();
    // Randomly resolve or reject promise based on the random calculation
    if (rand < 0.5) resolve()
    // One line if/else statements are your friend when they're simple
    else reject();
})
// To take action on a resolved promise, we need to specify what happens THEN
willGetYouADog.then(() => {
    console.log("YAY WE GOT A DOG!")
});
// Rejected promises don't result in any output unless we add a "catch"
willGetYouADog.catch(() => {
    console.log(":( No dog")
})