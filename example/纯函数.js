/**
 * 纯函数有两个特点
 * 1、不能改变入参
 * 2、不能影响作用域之外的变量s
 */ 
//这是一个纯函数,没有改变入参a,b
function sum(a+b){
    return a+b
}
// 这就不是纯函数
function withdrawl(account,amount){
    account.balance = account.balance-amount
}
let account = {name:"张三",balance:100}
withdrawl(account,10)
