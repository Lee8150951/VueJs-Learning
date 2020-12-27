function add(num1, num2) {
    return num1 + num2
}

function mul(num1, num2) {
    return num1 * num2
}

// 使用commonJS进行模块化
module.exports = {
    add, mul
}