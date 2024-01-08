var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
var h = +input[0];
var m = +input[1];
m = m - 45;
if(m < 0){
    m = 60 + m;
    h = h - 1;
} 
if(h < 0) {
    h = 23;
}
console.log(h,m);

