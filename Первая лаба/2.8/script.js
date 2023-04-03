//Постфиксная и префиксная формы
//Чему будут равны переменные a, b, c и d в примере ниже?
let a = 1,
  b = 1;
let c = ++a;
let d = b++;
alert(c); // 2
alert(d); // 1
alert(a); //2
alert(b); //2

//Результат присваивания
//Чему будут равны переменные a и x после исполнения кода в примере ниже?
let y = 2;
let x = 1 + (y *= 2);
alert(y); // 4
alert(x); // 5

//Исправьте сложение
let first = prompt("Первое число?", 1);
let second = prompt("Второе число?", 2);
alert(+first + +second); //  3
