var input = require('fs').readFileSync(0).toString().split('\n');
var x = parseInt(input[0]);
var y = parseInt(input[1]);
if (x > 0 && y > 0) {
    console.log(1);
} else if (x < 0 && y > 0) {
    console.log(2);
} else if (x < 0 && y < 0) {
    console.log(3);
} else if (x > 0 && y < 0) {
    console.log(4);
}
