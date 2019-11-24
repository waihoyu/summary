// let Book = {};
// let name = '';

// Object.defineProperty(Book,'name',{
//     set:function(value){
//         name = value;
//         console.log(name);
//     },
//     get:function (){
//         return '《' + name + '》';
//     }
// });

// Book.name = 'Vue权威指南';
// console.log(Book.name);

// let Book2 = {};
// let name2 = '';
// Object.defineProperty(Book2,'name2',{
//     set:function(value){
//         name2 = value;
//         console.log(name2)
//     },
//     get:function(){
//         return  '《' + name2+ '》';
//     }
// });
// Book2.name2 = 'React权威指南';
// console.log(Book2.name2);


// let library = {
//     book1:{
//         name:'Vue基础入门'
//     },
//     book2:{
//         name:'React基础入门'
//     },
//     book3:'JavaScript红宝书'
// };

// function observe(value){
//     if (!value || typeof value !== 'object') {
//             return ;
//     }
//     Object.keys(value).forEach((key)=>{
//         Observer(value,key,value[key]);
//     });
// }

// function Observer(param,key,value) {  
//     observe(value);
//     Object.defineProperty(param, key, {
//         enumerable:true,
//         configurable:true,
//         set:function(newValue){
//             value = newValue;
//             console.log('新值被改变了');
//         },
//         get:function(){
//             return value;
//         }
//     });
// }
// observe(library);
// library.book1.name = 'Vue基础入门2.0';





















