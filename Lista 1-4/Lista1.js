////////// ZAD 2
function sumOfDigits(num){
    var sum = 0;
    for (let i = 0; i < (num+"").length; i++) sum += +((num + "")[i]);
    return sum;
}

function zad2(n){
    res = []
    for (let i = 1; i <= n; i++){
        var cond = true;
        if (i % sumOfDigits(i) == 0){
            for (let j = 0; j < (i+"").length; j++){
                if (+((i+"")[j]) == 0 || i % +((i+"")[j]) != 0) { 
                //jeśli i[j]==0 (nie da sie podzielic i/i[j]) lub 
                //i nie jest podzielne przez j[i]
                    cond = false;
                    break;
                }
            }
        }else{
            cond = false;
        }
        if (cond) res.push(i);
    }
    return(res);    
}
// console.log(zad2(100000));
////////// ZAD 3 - liczby pierwsze od 1 do n

function isPrime(n){
    if (n == 0 || n == 1){
        return false;
    } 
    for (let i = 2; i*i <= n; i++){
        if (n % i == 0) return false;
    }
    return true;
}

function AllPrimes(n){
    res = []
    for (let i = 1; i <n; i++){
        if (isPrime(i)) res.push(i);
    }
    return res;
}

//console.log(AllPrimes(100));
//console.log(isPrime(5));

////////// ZAD 5 - fib iter i fib rekur

function fib_rek(n){
    if (n == 0 || n == 1) {
        return n;
    }
    return fib_rek(n-1) + fib_rek(n-2);
}

function fib_it(n){
    var n0;
    var n1;
    for (let i = 0; i <= n; i++){
        if (i == 0 ){
            var n0 = 0;
            var n1 = 1;
        }else{
            n1 = n1 + n0;
            n0 = n1 - n0;
        }
        //console.log("n"+ i + " = "+ n0);
    }
    return(n0);
}
console.time("fib_it");
fib_it(30);
console.timeEnd("fib_it");
console.time("fib_rek");
fib_rek(30);
//console.timeEnd("fib_rek");



//for (let i = 0; i < 45; i++){
//}