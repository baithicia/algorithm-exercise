function fibonacci(x){
const fib_numbers = [0,1];
for (let i = 2; i < x; i++){
    fib_numbers[i] = fib_numbers[i-1] + fib_numbers[i-2];
}
return fib_numbers;
}
