// Здесь тебе нужно будет реализовать один из алгоритмов сортировки, который тебе известен.
// Функция принимает в качестве параметра array, который является массивом чисел.

const anySort = (array) => {

  const n = array.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

module.exports = anySort;