// Promise is "pending" until it is broken (rejected) or fulfilled (resolved)
const makeDogPromise = () => {
    // "Resolve" and "Reject" are callback functions passed into each promise
    return new Promise((resolve, reject) => {
        // Set timeout to mimic behavior of server waiting on request
        setTimeout(() => {
            const rand = Math.random();
            // Randomly resolve or reject promise based on the random calculation
            if (rand < 0.5) resolve()
            // One line if/else statements are your friend when they're simple
            else reject();
        }, 5000);
    });
};
// Call/execute the function containing our promise
makeDogPromise()
// To take action on a resolved promise, we need to specify what happens THEN
    .then(() => {
    // console.log("YAY WE GOT A DOG!")
    })
// Rejected promises don't result in any output unless we add a "catch"
    .catch(() => {
    // console.log(":( No dog")
})

// Pass the URL into our request
const fakeRequest = (url) => {
    // Return a new promise to be resolved or rejected
    return new Promise((resolve, reject) => {
        // Specify how long we wait to retrieve data
        setTimeout(() => {
            // Create an object of different pages
            const pages = {
                // Array of users within database
                '/users': [
                    { id: 1, username: 'Bilbo' },
                    { id: 5, username: 'Frodo' }
                ],
                // Object of specific user's info
                '/users/1': {
                    id: 1,
                    username: 'Bilbo', 
                    upvotes: 360,
                    city: 'Lisbon',
                    topPostId: 454321
                },
                // Same
                '/users/5': {
                    id: 5,
                    username: 'Frodo',
                    upvotes: 571,
                    city: 'Honolulu'
                },
                // Object of data contained on post
                '/posts/454321': {
                    id: 454321,
                    title: 'WTF',
                    comments: 100,
                    likes: 1000
                },
                // Text presented on about page
                '/about' : 'This is the about page!'
            }
            // Assign page url to data variable
            const data = pages[url];
            // If the URL exists, resolve with status 200 (OK) and data attached
            if (data) resolve({ status: 200, data });
            // Otherwise, reject with status 404 (page not found)
            else reject({ status: 404 })
        }, 2000);
    });
};

// Promise/Request Chaining
fakeRequest('/users')
    .then((res) => {
        console.log(res.data);
        // Grabs first user ID from /users page data
        const id = res.data[0].id;
        // Passes into next request with template literal
        return fakeRequest(`/users/${id}`);
    })
    .then((res) => {
        console.log(res.data);
        // Grabs the top post ID from /posts page data
        const postId = res.data.topPostId;
        return fakeRequest(`/posts/${postId}`);
    })
    .then((res => {
        // Prints the data associated with /postId page
        console.log(res.data);
    }))
    .catch((err => {
        console.log('Page not found', err);
    }))