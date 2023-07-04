const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date().toISOString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

createPost({ title: 'Post1' })
    .then(() => updateLastUserActivityTime())
    .then((activityTime) => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', activityTime);
        return deleteLastPost();
    })
    .then(() => {
        console.log('Posts after deletion:', posts);
    })
    .catch((error) => {
        console.log(error);
    });