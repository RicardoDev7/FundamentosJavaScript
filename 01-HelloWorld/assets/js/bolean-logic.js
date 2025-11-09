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

console.warn('Asignation with logic operators');

const iamUndefined = undefined;
const iamNull = null;
const iamFalse = false;

const a1 = true && 'Hello World';
const a2 = 'Hello' && 'World' && iamFalse && true;
const a3 = iamFalse || 'I am not false';
const a4 = iamFalse || iamUndefined || iamNull || 'Now I have a value' || true;
const a5 = iamFalse || iamUndefined || returnTrue() || 'Now I have a value' || true;
console.log({a1, a2, a3, a4, a5});