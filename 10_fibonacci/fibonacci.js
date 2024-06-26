const fibonacci = function(n) {
    let fib
    if (n != "number"){
        fib = parseInt(n);
    } else {
        fib = n;
    }

    if (fib < 0) return "OOPS";

    if (fib === 0) return 0;

    let prev = 1;
    let prevprev = 0;

    for (let i = 2; i <= fib; i++){
        let current = prev + prevprev;
        prevprev = prev;
        prev = current;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
