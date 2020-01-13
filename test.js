//найти крайний правый 0 в двоичном представлении числа 37 и получить его индекс

//возвести 2 в степень равную степени индекса


let int=1;
let arr = int.toString(2).split('');
console.log(arr);

arr.map((el,idx,array)=>{
   if((idx+1)%2===0){
       array[idx]=array[idx-1];
       array[idx-1]=el;
   }
});
console.log(parseInt(arr.join(''),2));
