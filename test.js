let arr =
    [[1,2,3], //     [7, 4, 1]
        [4,5,6], //  [8, 5, 2]
        [7,8,9]]; // [9, 6, 3]
//[[7,4,1],
//  [8,5,2],
//  [9,6,3]]
let res = [];
for(let elem of arr){
    console.log(elem);
    res.push([elem[0]]); //создаем новый массив с первым елементом

}
console.log(res);

let newArr = arr.map((item, index, array) => {
    for (let i = 1; i < item.length; i++) {
        res[i].unshift(item[i]);
    }
});

// console.log(res);