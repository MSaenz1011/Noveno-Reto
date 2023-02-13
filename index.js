//Sumatoria del valor de las propiedades de un objeto

function myFunction(obj) {
    let sumatoria = 0;
    for (const key in obj) {
        sumatoria += obj[key]
    }
    return sumatoria
}

console.log(myFunction({ w: 15, x: 22, y: 13 })) // 50  

//Fibonacci

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2); 
}
