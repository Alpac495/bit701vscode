// var a = Math.random();
// for (let i = 0; i < 5; i++) {
//     let r = parseInt(Math.random()*100);
//     console.log(r);
// }

// for (let i = 0; i < 5; i++) {
//     let r = parseInt(Math.random()*10)+1;
//     console.log(r);
// }

// var num = new Array(5);
// for (let i = 0; i < num.length; i++) {
//     num[i]=parseInt(Math.random()*10)+1;

//     for (let j = 0; j < i; j++) {
//         if(num[i]==num[j]){
//             i--;
//             break;
//         }
//     }
    
// }
// console.log(num);

var arr1 = new Array();
arr1.push("도오모");
arr1.push("화요일데스");
arr1.push("에어리어루");
arr1.push("김밥밥");
arr1.push("밥밥김");

setInterval(() => {
    let su = parseInt(Math.random()*4);
    //console.log(`${arr1[su]}`);
    console.log(arr1[su]);

}, 500);