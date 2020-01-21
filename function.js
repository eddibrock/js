/**
 * Контекст this в функции
 * стрелочная функция
 * Переменные, объявленные внутри функции, видны только внутри этой функции.
 * у функции есть доступ к внешним переменным и может изменять их, но не в случае изменения аргумента
 * функция как метод обьекта
 *
 * 1) Стремиться к максимальной связности функции ( 1 цель)
 * 2) Правильно называть
 * Функции, начинающиеся с…

 "get…" – возвращают значение,
 "calc…" – что-то вычисляют,
 "create…" – что-то создают,
 "check…" – что-то проверяют и возвращают логическое значение, и т.д.
 * 3) не изменять внешнее окружение
 * */
//тонкости
//1) Если забыть return то фунция вернет undefined
//2) чтобы немедленно выйти из функции return; без значения
// https://learn.javascript.ru/function-basics
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions

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

//apply and call


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