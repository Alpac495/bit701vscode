//var : 함수형 변수
//let : 영역형 변수

var a = 1;
let b = 2;

function test1(){
    var a=3; //새로 생성, 외부의 a 와는 완전히 다름
    let b=4; //새로 생성 영역을 벗어나면 증발함(당연)


    if(true){
        var a=5; //함수 안에서는 덮어쓰게 된다.
        let b=6; //여전히 새로 생성, 그리고 영역을 빠져나가면 사라진다.
        console.log(`a=${a}, b=${b}`);
    }
    console.log(`a=${a}, b=${b}`);
}
test1();
console.log(`a=${a}, b=${b}`);