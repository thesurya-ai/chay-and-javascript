const marvel_heros = ["thor", "Ironman", "Spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)//existing array par push krta hai 
// console.log(marvel_heros);// array ko as a data le liya sinlge type of array ho gya ye[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]


// *******using concat method******/

// const allHeros = marvel_heros.concat(dc_heros) //ek new array bnaya fir add kiya then add ho gya = [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ] 
// console.log(allHeros);


//******saprad (....) method */add the tow array

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);


// Array Ke andar array then using ***flat method*** sabhi ko ek sath de deta hai

const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Surya"));//false
console.log(Array.from("Surya"));//[ 'S', 'u', 'r', 'y', 'a' ]

console.log(Array.from({name: "Surya"}))// impaty array Intresting points

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// const  score4 = [...score1,...score2,...score3]
// console.log(score4);


