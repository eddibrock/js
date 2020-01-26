//при добавлении | 0 к выражению оно округляется в меньшую сторону
// 10 / 6 | 0 - будет 1

//основы математики https://developer.mozilla.org/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8/Math

/** Math */

let test=Math.abs(-1); // 1 получить модуль числа
test = Math.abs('-2');
// test= Math.ceil(4.4);
// Math.ceil(.95);    // 1
// Math.ceil(4);      // 4
// Math.ceil(7.004);  // 8
// Math.ceil(-0.95);  // -0

// Math.floor( 45.95); //  45
// Math.floor(-45.95); // -46
console.log(test);

// Вернёт значение 20
x = Math.round(20.49);

// Вернёт значение 21
x = Math.round(20.5);

// Вернёт значение -20
x = Math.round(-20.5);

// Вернёт значение -21
x = Math.round(-20.51);