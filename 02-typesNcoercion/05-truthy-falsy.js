//> Falsy convert to false when operated with Boolean and vice versa

//~# some examples are -
//~# 0, -0, null, undefined, "", false, NaN

//* some tips
//* !! to boolean, + to number

//~? ADVANTAGES OF COERCION
let a = 9;
let b = '10';
if (a > b) {
  // do something
}
//% IS SAME AS
if (Number(a) > Number(b)) {
  // do something
}
