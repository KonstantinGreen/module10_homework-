//Задание 1
let a = prompt('Введите число');
let b = +a;
if (typeof b == "number" && !isNaN(b)) {
  if (b == 0) {
    console.log('ноль')
  } else if (b % 2 == 0) {
    console.log('чётное');
  } else {
    console.log('нечётное');
  }
} else {
  alert('Упс, кажется, вы ошиблись')
}


// Задание 2
let x = 5;
if (typeof x === 'number') {
  console.log(x + ' - это число');
} else if (typeof x === 'string') {
  console.log(x + ' - это строка');
} else if (typeof x === 'boolean') {
  console.log(x + ' - это логический тип')
} else console.log(x + 'тип не определен');
