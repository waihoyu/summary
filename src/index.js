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

var counter = 0;
let library = {
    book1:{
        name:'Vue基础入门'
    },
    book2:{
        name:'React基础入门'
    },
    book3:'JavaScript红宝书'
};

function observe(value){
    if (!value || typeof value !== 'object') {
            return ;
    }
    Object.keys(value).forEach((key)=>{
        Observer(value,key,value[key]);
    });
}

function Observer(param,key,value) {  
    observe(value);
    let dep = new Dep();
    Object.defineProperty(param, key, {
        enumerable:true,
        configurable:true,
        set:function(newValue){
            if (value === newValue) {
                  return   
            }
            value = newValue;
            console.log(value)
            console.log('新值被改变了');
            dep.notify(); // 如果数据变化，通知所有订阅者
        },
        get:function(){
            // console.log('Observer get' + Dep.target)
            if (Dep.target) {
                // console.log('Observer get')
                dep.addSub(Dep.target);    
            }
            return value;
        }
    });
}
Dep.target = null;

function Dep()
{
    counter++;
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub){
        this.subs.push(sub);
    },
    notify:function(){
        this.subs.forEach(function(sub){
            sub.update();
        });
    }
}


function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get();  // 将自己添加到订阅器的操作
}
 
Watcher.prototype = {
    update: function() {
        this.run();
    },

    run: function() {
        var value = this.vm.data[this.exp];
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },

    get: function() {
        Dep.target = this;  // 缓存自己
        var value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
        Dep.target = null;  // 释放自己
        return value;
    }
};


// new SelfVue({name: 'hello world'}, ele, 'name');
// var selfVue = new SelfVue({name: 'hello world'}, ele, 'name');

function SelfVue (data, el, exp) {
    this.data = data;
    observe(data);

    el.innerHTML = this.data[exp];  // 初始化模板数据的值

    new Watcher(this, exp, function (value) {el.innerHTML = value;console.log('counter ' + counter)});

    return this;
}


// observe(library);
// library.book1.name = 'Vue基础入门2.0';
// library = '1222';

// export default SelfVue;
