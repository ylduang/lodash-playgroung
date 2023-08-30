import always from "lodash/fp/always";
import propEq from "lodash/fp/propEq";
import compose from "lodash/fp/compose";
import complement from "lodash/fp/complement";
import isNil from "lodash/isNil";
import curry from "lodash/curry";
import identity from "lodash/fp/identity";
import unionBy from "lodash/fp/unionBy";

console.log(always(5)());
console.log(propEq("a", 5)({ a: 5 }));
console.log(
  compose(
    (a) => a + 1,
    (a) => a + 1,
    (a) => a + 1,
    (a) => a + 1
  )(0)
);
console.log(identity(5));
console.log(complement(identity)(false));

const sum = curry((a, b) => a + b);
console.log(sum(2, 2));
console.log(sum(2)(2));

console.log(isNil(null));
console.log(isNil(undefined));
console.log(isNil(false));
console.log(isNil(""));
console.log(isNil(0));
// console.log(unionBy([{a:1},{b:1}],[{a:2},{a:3}],[{a:4},{a:1},{b:2},{a:5}],"a"))

console.log(
  unionBy(
    [{ a: 1 }, { b: 1 }, { a: 2 }, { a: 3 }, { a: 4 }],
    [{ a: 1 }, { b: 2 }, { a: 5 }],
    "a"
  )
);

console.log(
  unionBy(
    [{ a: 1 }, { b: 1 }, { a: 2 }, { a: 3 }, { a: 4 }],
    [{ a: 1 }, { b: 2 }, { a: 5 }],
    "a"
  )
);
