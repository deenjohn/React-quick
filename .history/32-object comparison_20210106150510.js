function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  // que : what is the difference between returning false vs break statement
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
        // break; // wrong
      return false;
    }
  }

  return true;
}

// const hero1 = {
//   name: 'Batman'
// };
// const hero2 = {
//   name: 'deen'
// };
// const hero3 = {
//   name: 'Joker'
// };

const hero1 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};

const hero2 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};

console.log(shallowEqual(hero1,hero2))

function deepEqualNew(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }

  return true;
}

function isObject(object) {
  return object != null && typeof object === 'object';
}