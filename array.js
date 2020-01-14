/** Bool */
//Array.isArray();
/** Изменяющие исходный массив */
let arrChangeObj = {
    splice: function (arr) {
        /** Просто вырезание */
        // arr.splice(0,1); // с позиции 0 удалить 1 елемент (включительно)
        /** Добавление */
        const addition = ['five', 'six'];
        // arr.splice(0,1,addition[0]); // с позиции 0 удалить 1 елемент (включительно) и добавить 'one.half'. Можно и не удалять тогда 0 вместо 1 будет
        // arr.splice(arr.length,0,...addition); // в конец массива добавить массив
    },
    /** Сортировка в массиве */
    sortIt: function () {
        let unsortedNum = [1, 3, 5, 2, 14]; // Если сортируем числа
        let unsortedStr = ['C', 'b', 'a',]; // Можно сортировать и строки, но Заглавная буква вносит свои корректировки
        unsortedStr.sort(); // сортирует как строки и 2>14 из за этого + сортирует сам массив
        //поэтому лучше использовать свою функцию для сортировки
        unsortedNum.sort((a, b) => a - b); //Если А больше B то вернется положительное число
        console.log(unsortedStr);
        //TODO тема расскрыта не до конца https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    },
    reverseIt: function (arr) {
        arr.reverse(); // изменяет оригинальй массив;
    },
    pushPopShiftUnshift: function () {
        let someElem = 'hi';
        let someArr = ['here', 'we', 'go'];
        someArr.push(someElem); //добавили hi справа, теперь [ 'here', 'we', 'go', 'hi' ]
        someArr.pop(); // убрали hi справа
        someArr.shift(); // Убрали елемент слева, теперь [ 'we', 'go' ]
        someArr.unshift(someElem); // Добавили hi слева, теперь [ 'hi', 'we', 'go' ]
    }

};

/** НЕ изменяющие исходный массив но создающие новый*/
let arrUnchangeObj = {
    sliceIt: function (arr) {
        /** в отличии от метода splice этот метод не изменяет исходный массив */
        // const newArr=arr.slice(); //скопировать массив
        // const newArr=arr.slice(1,3); //скопировать с 1 позиции включительно и до 3 НЕ включительно
    },
    concatIt: function (arr) {
        const addition = ['five', 'six'];
        const newArr = arr.concat(addition, 'seven');
        // const newArr=Array.prototype.concat(arr,addition);
        console.log(newArr);
    },
    splitJoin: function () {
        let str = 'abcd';
        let arr = str.split('');
        let glued = arr.join('/');
        console.log(glued);
    },

    /** Поиск в массиве */
    searchIt: function () {
        let arr = [1, 0, false];

        alert(arr.indexOf(0)); // 1
        alert(arr.indexOf(false)); // 2
        alert(arr.indexOf(null)); // -1
        alert(arr.includes(1)); // true
    }
};


/** find findIndex map reduce (reduceEnd) filter
 *  Имеют 2 необязательный аргумент thisArg (для передачи контекста)
 *  TODO some and every работают так же, может их сюда надо?
 * */
function mostUsedMethods() {
    //Вместо item, index и array использовать v i a? довольно удобно и локонично и просто запомнить
    const arr = [1, 2, 3, 4, 5, 2];
    const isSomeInArr = arr.some(el => el === 3); // хотябы 1 равен 3
    const isAnyInArr = arr.every(el => el < 6); // все меньше 6
    /**поиск и фильтрация*/
    const findValue = arr.find(item => item === 2); // Если елемент равен 2 то он будет значением переменной а поиске прекратится
    const findIdx = arr.findIndex(item => item === 2); // Тоже самое, но уже возвращается не значение а индекс
    const filtered = arr.filter((item, index) => { //если find работает для 1 значения то filter для многих
        if (item % 2 === 0) {
            return true;
        }
    }); // Получить только четные числа. Работает так - если return true то item попадет в массив. При этом, как и в map и reduce, можно что то делать
    // с другими аргументами, например с index(получить массив индексов четных чисел для дальнейшего доступа к ним). Но обязательно нужно вернуть TRUE иначе получим пустой массив
    /**действие над елементами массива*/
    const multiplyBy2 = arr.map(item => item * 2); //делает что то с елементом и копирует результат в новый массив
    const reduceValue = arr.reduce((acc, el) => acc + el, 0); // просто суммируем каждое число вместе.
}

/** Если нужно проверить елементы массива */
function getBool() {
    // Если нужно протестировать элементы массива на условие и нужно вернуть булевое значение,
    // вы должны воспользоваться методами Array.prototype.every() или Array.prototype.some().
    let arr=[4,3,7,5];
    // console.log(arr.every((el)=>el>10)); // false так как никто не больше 10
    // console.log(arr.every((el)=>el<10)); // true так как все меньше 10
    // arr.push(11);
    // console.log(arr.every((el)=>el<10)); // false так как 1 елемент больше 10
    console.log(arr.some((el)=>el%2===0)); //true Если хотябы 1 елемент удовлетворит условию то будет true

}

/** Циклы */

function iterate() {
    let arr = ['one', 'two', 'tree', 'for'];
    for (let word of arr) {
        console.log(word);
    }
    arr.forEach((el, idx, arr) => {
        // е существует способа остановить или прервать цикл forEach() кроме как выбрасыванием исключения.
        // Если это требуется, метод forEach() неправильный выбор
            console.log(`el: ${el} idx: ${idx} arr: ${arr}`)
        }
    );
}

// getBool();
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// mostUsedMethods();
// pushPopShiftUnshift();
// splitJoin();
// sortIt();
// console.log(arr);

