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

function fibonacci(num) {
    let n1 = 0;
    let n2 = 1;
    let sequence;

    if(num===0){
        return 1
    }

    for (let i = 1; i <= num; i++) {
        sequence= n1 + n2; 
        n1= n2
        n2= sequence
    }

    return sequence
}

console.log(fibonacci(0))  //1