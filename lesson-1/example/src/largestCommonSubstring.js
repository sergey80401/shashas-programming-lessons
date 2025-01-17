// Написать функцию largestCommonSubstring, которая принимает в качестве параметров две строки: str1 и str2. И Возвращает наибольшую общую подстроку, УЧИТЫВАЯ ПРОБЕЛЫ
// Пример:
// str1 = "Саше нравится кодить на JavaScript"
// str2 = "Программистам на Java нравится пить кофе"
//
// P.S. В str1 и str2 много общих подстрок, например " на Java", "ить", и даже " " будет считаться общей подстрокой, так как обе строки содержат пробелы. Но надо найти наибольшую
//
// Результат выполнения функции: " нравится "

const largestCommonSubstring = (str1, str2) => {
  let maxSubstring = ""; 

  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j <= str1.length; j++) {
      const substring = str1.slice(i, j); 
      
      if (str2.includes(substring) && substring.length > maxSubstring.length) {
        maxSubstring = substring; 
      }
    }
  }

  return maxSubstring;
};

module.exports = largestCommonSubstring;