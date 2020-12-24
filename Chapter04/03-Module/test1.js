var name = 'Jacob'
var age = 18
var flag = true

function sum(num1, num2) {
    return num1 + num2
}

if (flag) {
    console.log(sum(1, 2))
}

// 导出flag和sum（方法一）
export {flag, sum}
// 导出方法二
export var num = 1000
export var height = 1.99
// 导出函数
export function output() {}
// 导出类
export class output2 {}