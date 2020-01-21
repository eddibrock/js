//найти крайний правый 0 в двоичном представлении числа 37 и получить его индекс

//возвести 2 в степень равную степени индекса
function myF(n,res) {
     res+=n;
    if(n!==1){
        n--;
        return myF(n,res);
    }
    else {
        return res.split('').reverse().join(' ');
    }
}

function my_function(n) {
    let x = '';
    let i = n;
    if (n <= 0) {
    } else {
        x += my_function(n - 1) + " " + i++;
    }
    return x;
    // Тут нужно написать решение
}



console.log(myF(3,''));