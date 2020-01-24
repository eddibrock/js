//найти крайний правый 0 в двоичном представлении числа 37 и получить его индекс

let animals = [
    { species: 'Лев', name: 'Король' },
    { species: 'Кит', name: 'Леня' },
    { species: 'Пес', name: 'Иван' },
];

animals.map((el,i,a)=>{
   console.log(`${el.species} : ${el.name} - ${i}`);
});