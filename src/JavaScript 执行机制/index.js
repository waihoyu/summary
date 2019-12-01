
console.log(1);

setTimeout(function(){
    console.log(2);
},0);  //微任务

new Promise(function(){
    console.log(3);
}).then(function(){
    console.log(4);
});

async function fn(){
    await function () {
        console.log(5);
      }
    console.log(6);
}

fn();

console.log(7);

// 1  3  6  7 2 4 5