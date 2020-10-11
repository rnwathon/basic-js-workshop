/*

  Variable:
  -> Ngasih nama ke sebuah tipe data


  Tipe Data di JavaScript:
  ========================
  Primitives/Values Types   |   Reference Types
  ---------------------------------------------
  String*                       Array
  Number*                       Object
  Boolean*                      Function
  undefined
  null
  symbol

*/

// keyword: var, let, const

// keyword namaVariable; -> deklarasi/inisialisasi variable

// Primitives
// const und; // value default undefined
const str = "Hello World"
const num = 12345
const bool = true
const n = null

// Reference Type
const arr = ["hello", 1, 3, false, true, null]
const obj = {
  // Properties
  str: "Hello World",
  num: 12345,
  bool: true,
  n: null,
  arr: ["hello", 1, 3, false, true, null],
  // Method
  func: function(){ console.log("ini function di dalam object")}
}
const func = function(){ console.log("ini function dalam variable ")}

// Aturan penamaan variable
// 1. Ga boleh pake reserved keyword
// 2. Ga boleh berawalan angka
// 3. Ga boleh ada spasi
// 4. Harus mejelaskan datanya

// Tipe-tipe nama variable
// 1. camelCase
// 2. PascalCase
// 3. kebab-case * tidak termasuk
// 4. snake_case

// Strictly Type
// -> Data tidak bisa dirubah dengan tipe data yg berbeda
// int umur = 32
// Dynamic Type -> ini javaScript
// -> Data bisa dirubah dengan tipe data yg berbeda
// Contoh
let hewan = "kucing"
console.log(hewan)
hewan = 123 
console.log(hewan)
