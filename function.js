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