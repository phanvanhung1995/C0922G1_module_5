var sum = 0;
var list = [];
list.push(0);
var fibonacci = function (number) {
    var a = 1, b = 0, temp = 0;
    number = number - 2;
    while (number >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        number--;
        list.push(temp);
        sum += temp;
    }
    return list;
};
console.log('các số fibonacci là ' + fibonacci(5));
console.log('tổng các số fibonacci là : ' + sum);
