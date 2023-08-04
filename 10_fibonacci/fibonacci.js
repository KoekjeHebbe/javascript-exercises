const fibonacci = function(a) {
b = 0;
c = 1;
a = a -1;
if (a < 0){
    return "OOPS"
} else
for (let i = 0; i < a; i++){
    d = b + c;
    b = c;
    c = d;
}
return c
};

// Do not edit below this line
module.exports = fibonacci;
