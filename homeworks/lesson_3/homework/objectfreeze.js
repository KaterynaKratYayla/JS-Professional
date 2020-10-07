/*
  Задание: написать функцию, для глубокой заморозки обьектов.

  Обьект для работы:
  

  frozenUniverse.evil.humans = []; -> Не должен отработать.

  Методы для работы:
  1. Object.getOwnPropertyNames(obj);
      -> Получаем имена свойств из объекта obj в виде массива

  2. Проверка через typeof на обьект или !== null
  if (typeof prop == 'object' && prop !== null){...}

  Тестирование:


    // let FarGalaxy = DeepFreeze(universe);
    //   FarGalaxy.good.push('javascript'); // false
    //   FarGalaxy.something = 'Wow!'; // false
    //   FarGalaxy.evil.humans = [];   // false


*/
let universe = {
  infinity: Infinity,
  good: ['cats', 'love', 'rock-n-roll'],
  evil: {
    bonuses: ['cookies', 'great look'],

  }
};

function deepFreeze(universe) {

  var properties = Object.getOwnPropertyNames(universe);

  properties.forEach(function(item) {
    var temp = universe[item];


    if (typeof temp == 'object' && temp !== null)
      deepFreeze(temp);
  });

  return Object.freeze(universe);
}


let farGalaxy = deepFreeze(universe);
farGalaxy.good.push('javascript'); // false
farGalaxy.something = 'Wow!'; // false
console.log(farGalaxy);
console.log(farGalaxy.evil.humans = []);   // false

