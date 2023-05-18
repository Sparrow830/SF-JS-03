// Напишите функцию transformUpvotes(arr),
// которая принимает массив сокращенных записей количества лайков ['10k', '2.3k', '5k', '32', '28.4k']
// и возвращает массив чисел [10000, 2300, 5000, 32, 28400].


function transformUpvotes(arr) {
  return arr.map(x => x.toLowerCase().includes("k") ? x.slice(0, -1) * 1000 : Number(x));
}

console.log(transformUpvotes(["10k", "2.3k", "5k", "32k", "28.4k"]));


// const transformUpvote = strVal => {
//   const hasK = strVal.toLowerCase().includes('k');
//   if (hasK) {
//     const numPart = strVal.slice(0, -1);
//     return numPart * 1000;
//   }
//   return Number(strVal);
// }

// const transformUpvotes = arr => arr.map(transformUpvote);

// alert( transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k']) )