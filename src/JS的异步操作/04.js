//  function out(param) { 
//      return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.ceil(Math.random() * 10) // 假设num为7
//             if (num > 5) {
//             // console.log(resolve.toString())
//               resolve(num) //返回7
//             } else {
//               reject(num)
//             }
//           },2000)
//     })
//  }

// out().then((a)=>{
//      console.log('a')
//      return  out()
//  }).then((b)=>{
//     console.log('b')
// });


// console.log(1);

const COLOR_RED    = Symbol();
const COLOR_GREEN  = Symbol();

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_RED;
    default:
      throw new Error('Undefined color');
    }
}

console.log(getComplement(COLOR_RED))