a = +prompt('Введите любое число');
result = 'Число является простым';
if (a < 2) {
    result = 'Число не является простым'; 
}
for (i = 2; i < a; i = i + 1) {
  if (a % i == 0) {
    result = 'Число не является простым';
    break;
  }
}
console.log(result);

