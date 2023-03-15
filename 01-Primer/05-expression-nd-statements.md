#### Expressions are part of sentences - they can be statements too sometimes

1. Primary expressions - 1, "Ajay"
2. Object and Array Initializers - [], {}
3. function definition expressions - function a(){}
4. Property access expressions - array[0], object[key]
5. Arithmetic expressions - +,-,\*,%,/ etc.
6. Logical expressions - ||, &&, ==, >=
7. Assignment expressions - =
8. await, void, comma, eval, delete, ?:(ternary), ??(nullish coalescence/first-defined), typeof
9. Invocation expressions

#### Statements are like meaningful sentences

1. Expression statements - exp that are statements, e.g., function invocation exp.
2. compound {} and empty ; statements, e.g., -- `1+2`;
3. conditionals - if, else if, else, switch-case
4. loops - while, for, do-while, for-of, for-in
5. jumps - break, continue, return, yield, throw, try-catch-finally
6. DECLARATIONS - let, const, var

EG::
-- Count the expressions in these two statements
var age = 23;
age = 4 + (age \* 2)
