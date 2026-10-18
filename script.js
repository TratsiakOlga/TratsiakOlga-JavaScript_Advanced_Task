'use strict'
let lang = prompt("Выберите одно из значений для переменной lang: 'ru' или 'en'");
let day;
if (lang === 'ru') {
   day = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
} else if (lang === 'en') {
   day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
} else {
   console.log("Что-то пошло не так. Проверьте правильность ввода значения!");
}
if (day) {
   console.log(day);
}
console.log('*******')

let lang2 = prompt("Выберите одно из значений для переменной lang2: 'ru' или 'en'");
let day1;
switch (true) {
   case lang2 === 'ru':
      day1 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
      console.log(day1);
      break;
   case lang2 === 'en':
      day1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      console.log(day1);
      break;
   default:
      console.log("Что-то пошло не так. Проверьте правильность ввода значения!");
}
console.log('*******')

let lang3 = prompt("Выберите одно из значений для переменной lang3: 'ru' или 'en'");
let week = [
   ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
   ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];

let langIndex = {
   'ru': 0,
   'en': 1
};

console.log(week[langIndex[lang3]] || "Что-то пошло не так. Проверьте правильность ввода значения!");
console.log('*******')

let namePerson = prompt('Введите одно из имен: Артем или Александр')
namePerson === 'Артем' ? console.log('директор') : namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент') 