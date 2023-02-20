//다중 for
//위에가 총 사이클
//아래가 사이클당 반복회수
//break가 아래에 걸리면 i 쪽 for만 돈다
for (let i = 1; i <= 3; i++) {
    console.log("hello");
    for (let j = 0; j <= 4; j++) {
        console.log(`\t${i}:${j}`);
        if(j==2){
            break;
        }
        
    }
}