const calculator={
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    times: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    },
    // 얘는 제곱임
    power: function(a,b){
        return a**b;
    },
};

const plusResult = calculator.plus(45,23);
const minusResult = calculator.minus(45,23);
const timesResult = calculator.times(45,23);
const divideResult = calculator.divide(45,23);
const powerResult = calculator.power(45,23);

console.log(plusResult);

// const age= 96;
// function calculateKrAge(ageOfForeignor){
//     return ageOfForeignor+2;
// }

// const KrAge = calculateKrAge(age);
// console.log(KrAge);