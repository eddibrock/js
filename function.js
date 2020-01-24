/** 1) Основы
 * функция это обьект
 * Переменные, объявленные внутри функции, видны только внутри этой функции.
 * у функции есть доступ к внешним переменным
 * внутренние переменные функции имеют приоритет над внешними с таким же именем
 * Аргумент копируется в функцию и не влияет на его оригинал за исключением обьектов, которые передаются по ссылке
 *
 2) Контекст this в функции
 *
 3) Правила работы с функциями
 * 1) Стремиться к максимальной связности функции ( 1 действие, отраженное в названии)
 * 2) Правильно называть "префикс" + уточнение
 "get…" – возвращают значение,
 "calc…" – что-то вычисляют,
 "create…" – что-то создают,
 "check…" – что-то проверяют и возвращают логическое значение, и т.д.
 * 3) не изменять глобальное окружение
 * */
// тонкости
// 1) Если забыть return то фунция вернет undefined как и если return без значения
// 2) Функции могут быть подняты. Поднятие функции работает только с function declaration и не работает с function expression.
// https://learn.javascript.ru/function-basics
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions

/** Стрелочные функции */

function ArrowFunctions() {
    // Arrow function with two arguments
    const sum = (firstParam, secondParam) => {
        return firstParam + secondParam;
    };
    console.log(sum(2,5)); // Prints: 7

// Arrow function with no arguments
    const printHello = () => {
        console.log('hello');
    };
    printHello(); // Prints: hello

// Arrow functions with a single argument
    const checkWeight = weight => {
        console.log(`Baggage weight : ${weight} kilograms.`);
    };
    checkWeight(25); // Prints: Baggage weight : 25 kilograms.


// Concise arrow functions
    const multiply = (a, b) => a * b;
    console.log(multiply(2, 30)); // Prints: 60
}

function thisInFunction() {
    // 'use strict';
    console.log(this);
    // const hi=()=>{console.log(this);}; // Выведет пустой обьект
}

/** Методы функции */
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function
function callThis() {
//чтобы вызывать функцию с контекстом, например если функция является чьим то методом
    let myObj = {
        name: 'Sergey',
        callName: function (add) {
            return this.name + add;
        }
    };

    let name = myObj.callName;
    console.log(name.call(myObj,' A'));
}

// callThis();

//apply


/** Замыкания */
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
// fn_inside = outside(3); //
// result = fn_inside(5); // возвращает 8
// result1 = outside(3)(5); // возвращает 8

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1); // в консоле выведится 6 (1 + 2 + 3)

// конфликт имен. x внутри inside имеет приоритет перед x в outside. Но мне больше нравится обьяснение что
// функция уже имеет переменную и ей незачем идти дальше
function outside() {
    var x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}

// outside()(10); // возвращает 20 вместо 10