class FizzBuzz {
    validar_primos_3_5(number){
     if (number % 15 === 0)
        {
           return "FizzBuzz"
        }
     else if(number % 3 === 0){
        return "Fizz"
     }else if(number % 5 === 0)
     {
        return "Buzz"
     }
    }
}
module.exports = FizzBuzz;