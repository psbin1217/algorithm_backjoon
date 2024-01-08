var input = require('fs').readFileSync('example/2884.txt').toString().split(' ');
var h = +input[0];
var m = +input[1];
/*
시간 - 45분을 해야함
h : 시간(0~23)
m : 분(0~59)
1. m이 0일때 -45하면 60 + -뺀값
2. m이 -면 h-1하고 / m이 +면 h는 그대로
3. h가 -면 h는 23;
*/
m = m - 45;
if(m < 0){
    m = 60 + m;
    h = h - 1;
} 
if(h < 0) {
    h = 23;
}
console.log(h,m);

