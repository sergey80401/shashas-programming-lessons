// Написать функцию countOfSymbols, которая в качестве параметров принимает,
// какую-то строку и символ, а возвращает число вхождений этого символа в данную строку
// Например такой вызов написанной тобой функции countOfSymbols("Программирование", "м") вернет - 2
// Важно реализовать эту функцию не чувствительную к регистру (заглаваная/строчная буква)
// Типа вызов функции countOfSymbols("Программирование", "М") также должен вернуть - 2


const countOfSymbols = (str, char) => {
    const lowerStr = str.toLowerCase();
    const lowerChar = char.toLowerCase();
  
    let count = 0;
    for (let i = 0; i < lowerStr.length; i++) {
      if (lowerStr[i] === lowerChar) {
        count++;
      }
    }
  
    return count;
  };

module.exports = countOfSymbols