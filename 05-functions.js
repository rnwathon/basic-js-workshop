// Function
// --------
// cara kita untuk mengelompokan grup-grup kode tertentu.

// Anatomy function
// ----------------
// 1. Anonymous Function
// function(parameter, parameter2, dst.){ ... } 
// Anonymous function "biasanya" harus kita masukin ke variable
// Contoh:
// const func = function(parameter){ console.log(parameter )}

// 2. Function biasa
// function namaFunction(parameter) { ... }
// Contoh:
// function cetakWoo(){
//   console.log("Wooooo")
// }

// cetakWoo() // disebut function invoking

// 3. Arrow Function
// Pada dasarkanya arrow function mirip dengan anonymous function
// karna sifatnya yg biasnaya harus dimasukan ke dalam variable
// Contoh
// const scream = () => { console.log( "aaaaaaa" )}
// scream()

// Ada 2 Tipe Function
// 1. Side Effect Function
// 2. Pure Function

// Contoh Side Effet
const sideEffectFunc = () => { console.log("This is side effect") }
sideEffectFunc()

// Contoh Pure Function
const pureFunc = (num) => { return num * num }
let result = pureFunc(4)
console.log(result)