//ジェネリック型
//受け取る型を指定しないため、動的に使える
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj1 = merge({ name: "Yuzu", hobbies: ["Sports"] }, { age: 30 });
console.log(mergeObj1);

const mergeObj2 = merge({ id: 1, name: "Tom" }, { age: 31 });
console.log(mergeObj2);
