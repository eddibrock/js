let arr = [1, 2, 3, 4, 5, 6];
let pair = [];
for (let i = 0; i <= arr.length - 1; i++) {
    arr.forEach((el) => {
        if ((arr[i] + el) % 5 === 0 && arr[i] !== el && arr[i]<el) {
            pair.push([arr[i], el]);
        }
    });
}
console.log(pair);
