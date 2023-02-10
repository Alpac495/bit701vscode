for(var i=1; i<=10; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

var a=0;
while(true){
    a++;
    console.log(a);
    if(a==10){
        break;
    }
}
console.log("repeat over");

// while   continue break
var a=0;
while(true){
    a++;
    if(a%2==1)
        continue;

    console.log(a);
    if(a==10){
        break;
    }
}
console.log("repeat over");

function test1(){
    console.log("test1 함수 호출");
}
test1();//이 정도만 해도 호출이 된다.

//아래쪽이 활용도는 더 높을듯
const test2=function(){
    console.log("test2 함수 호출");
}
test2();
//화살표가 function 역할을 함
const test3=()=>console.log("test3 함수");
test3();

const a=4, b=5;



function test4(){
     return(a+b);
}

const sum1 = test4(a, b);
console.log(sum1);

const test5 = function(a, b){
    return(a+b);
}
const sum2 = test5(a, b);
console.log(sum2);


const test6=(a,b)=>a+b;

const sum3 = test6(a, b);
console.log(sum3);