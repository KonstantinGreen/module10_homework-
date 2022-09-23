const arr = [1, 2, 4, 6, 7]
console.log('Количество элементов массива ' + arr.length);
arr.forEach(function (item, i, arr) {
  console.log(i + ": " + item + "");
});