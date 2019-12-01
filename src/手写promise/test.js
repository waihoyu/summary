/* const Promise = require('./promise');
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
}) */
const Promise = require('./promise');
let p = new Promise((resolve, reject) => {
    console.log('promise new')
    resolve(12);
});

p.then((res) => {
    return new Promise((resolve, reject) => {
        console.log('promise 2')
        resolve(222);
    }).then((res) => {
        return new Promise((resolve, reject) => {
            console.log('promise 3')
            resolve(333);
        });
    }, 888);
}, 888)