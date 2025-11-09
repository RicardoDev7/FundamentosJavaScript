const returnTrue = () => {
    console.log("Returning true");
    return true;
}

const returnFalse = () => {
    console.log("Returning false");
    return false;
}

console.warn('Not or negation');
console.log(returnTrue());
console.log(!returnTrue());
console.log(!returnFalse());

console.warn('And');
console.log(returnTrue() && returnTrue());
console.log(returnTrue() && returnFalse());
console.log(returnFalse() && returnTrue());
console.log(returnFalse() && returnFalse());

console.warn('Or');
console.log(returnTrue() || returnTrue());
console.log(returnTrue() || returnFalse());
console.log(returnFalse() || returnTrue());
console.log(returnFalse() || returnFalse());