// Webpack seems to not figure out how to use only what's needed from lodash.
// A good way is to directly download only the lodash.get that is needed.

import get from "lodash.get";

const obj = {
  one: {
    two: {
      three: {
        four: "woof",
      },
    },
  },
};

// Takes as a first arg the element you wanna go through, as a second arg the path to get there and as a third arg what you wanna get instead of undefined if that's the case
const getWoof = get(obj, "one.three.four", {});
console.log(getWoof);

export const barbarian = "I'm a Barbarian";
