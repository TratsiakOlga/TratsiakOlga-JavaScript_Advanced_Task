'use strict';

const happen = function (text) {
   if (typeof text !== "string") {
      console.log("Ошибка! Переданные данные не являются строкой!");
      return
   }

   let correctText = text.trim();

   if (correctText.length > 30) {
      correctText = correctText.slice(0, 30) + "...";
   }

   return correctText;
}

console.log(happen("     Завтра в Минске будет солнечная погода, а в Бресте пойдет дождь   "));
console.log(happen("  В Минске хорошая погода!"))
console.log(happen(12467));