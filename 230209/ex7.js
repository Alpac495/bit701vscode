//js ppt 51p에 있음
// console.log("hi");
// setTimeout(function(){
//     console.log("1sec passed");
// },1000);

// setTimeout(() => {
//     console.log("3byo norimashita");
// }, 3000);

//setInterval(함수, 시간):일정 시간마다 함수를 호출
//변수명=setInterval(함수, 시간) : 멈추고 싶을 때 clearInterval(변수명)

var n=1;
var interval=setInterval(() => {
    console.log(n+"초 지났어요");
    n++;
    if(n>10){
        clearInterval(interval);
        console.log("타이머 종료");

    }
}, 1000);