const {expect} = require ("@jest/globals");
const FizzBuzz =require("../fizzbuzz");


describe('Tests que validan los múltiplos de 3 y 5', ()=>{
    const fizz_buzz = new FizzBuzz();
    /**
         * Feature para saber cuándo un número es primo de 3 y de 5
         * 1. Cuando el usuario digite un número divisible por 3, devuelve Fizz
         * 2. Cuando el usuario digite un número divisible por 5, devuelve Buzz
         * 3. Cuando el usuario digite un número divisible por 3 y 5, devuelve FizzBuzz
         * 4. Cuando el usuario digite un número no sea divisible por 3 o 5, devuelve el número
    */
    test(' Cuando el usuario digite un número divisible por 3, devuelve Fizz', ()=>{
        const numero_ingresado = 3;
        const respuesta_esperada = "Fizz";

        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);
        expect(respuesta_recibida).toBe(respuesta_esperada);
    })
    test('Cuando el usuario digite un número divisible por 5, devuelve Buzz', ()=> {
        const numero_ingresado = 5;
        const respuesta_esperada = "Buzz";

        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);
        expect(respuesta_recibida).toBe(respuesta_esperada);
    })
    test('Cuando el usuario digite un número divisible por 3 y 5, devuelve FizzBuzz', ()=> {
        const numero_ingresado = 15;
        const respuesta_esperada = "FizzBuzz";

        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);
        expect(respuesta_recibida).toBe(respuesta_esperada);
    })
})