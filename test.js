//найти крайний правый 0 в двоичном представлении числа 37 и получить его индекс

//возвести 2 в степень равную степени индекса


function findIndexCustom(int) {
    let arr = int.toString(2).split('').reverse();
    console.log(arr);
    let pos = arr.findIndex(el => el == 0);
    let posSecond = arr.findIndex((el,index) => el == 0 && index!==1);
    console.log(posSecond);
    return 2**(posSecond+1);
}

console.log(findIndexCustom(1073741824));