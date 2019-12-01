


console.log(1);

async function print(){
    await function(){
        return 2;
    };
    return 1
}
console.log(3)
console.log(print().then(e=>1));


