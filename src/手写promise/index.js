const Promise = require('./promise');
console.log(1)
new Promise((resolve, reject) => {
    // throw new Error('error ');
    console.log('开始啦 2')
    resolve(1)
}).then(value => {
    console.log('then 1 resolve');
    console.log('value', value)
}, reason => {
    console.log('reason then 1 reject', reason)
}).then(value => {
    console.log("then 2 resolve");
    console.log('value then 2 resolve', value)
}, reason => {
    console.log('then 2 reject', reason);
})