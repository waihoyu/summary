




async function out(param) {
   let a =  await (()=>{
       console.log('a')
        return new Promise(function a(){},function b(){})
    })()
    let b =  await (()=>{
        console.log('b')
        return 2
    })()
    let c =  await (()=>{
        console.log('c')
        return 2
    })()
}

console.log(out());