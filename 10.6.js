//Задание 1
const bank = [1, 1, 1, 1];
let copy = true;
const reference = bank[0];

for (let item of bank) {
  if (item !== reference) {
    copy = false;
  }
}
console.log(copy)

//Задание 2
let arrBig = [1, 2, 6, 7, 10, "apple", null, 0];
let isNull = 0;
let count = 0;
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < arrBig.length; i++) {
  if (typeof arrBig[i] === "number" || !isNaN(arrBig[i])) {
    count += 1;
    if (arrBig[i] == null) {
      isNull += 1;
    } else if (arrBig[i] % 2 === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }
}
console.log(`В массиве: ${count} цифр, ${isNull} Null's, ${evenCount} чётных, ${oddCount} нечётных!`);
