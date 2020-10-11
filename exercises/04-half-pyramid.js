/*
  ===== HALF PYRAMID =====
  Buat function untuk mencetak pattern di bawah ini di dalam console  :

  *
  **
  ***
  ****
  *****

*/

function halfPyramid(){
  // Write your code here

  // Solution
  for(let i = 0; i < 5; i++ ){
    let star = ""
    for(let j = 0; j <= i; j++){
      star += "*"
    }
    console.log(star)
  }

  // INI BISA JUGA, TAPI TIDAK DI SARANKAN
  // for(let i = 1; i <= 5; i++){
  //   let str = "*"
  //   console.log(str.repeat(i))
  // }
}

halfPyramid()