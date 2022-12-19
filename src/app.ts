//ジェネリック型
//受け取る型を指定しないため、動的に使える
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj1 = merge({ name: "Yuzu", hobbies: ["Sports"] }, { age: 30 });
console.log(mergeObj1);

interface lengthy {
  length: number;
}

// lengthプロパティを持つことを保証する（string型や配列型）
function countAndDescribe<T extends lengthy>(element: T): [T, string] {
  let descriptionText = "値がありません。";
  if (element.length > 0) {
    descriptionText = `値は${element.length}個です。`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

//第一引数にobjectを持つことを強制し、第二引数はそのオブジェクトのキーであることを強制する
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;
}

extractAndConvert({ name: "Max" }, "name");

// 文字列型、数値型、ブール型のみ
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    //配列が存在する場合、最後の配列は削除しない
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // indexOfは要素が見つからない場合、最後の配列を削除する
  }

  getItems() {
    return [...this.data];
  }
}

//文字列型であることを強制する
const textStorage = new DataStorage<string>();
textStorage.addItem("おはようございます");
textStorage.addItem("こんにちは");
textStorage.removeItem("こんにちは");
console.log(textStorage.getItems());

//数値型であることを強制する
const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(10);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

//オブジェクト型であることを強制する
// const objectStorage = new DataStorage<object>();
// const obj = { name: "Max" };
// objectStorage.addItem(obj);
// objectStorage.addItem({ name: "Mike" });
// objectStorage.addItem({ age: 20 });
// objectStorage.removeItem(obj);
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

//読み取り専用の文字列の配列
const names: Readonly<string[]> = ["Max", "Anna"];

//読み取り専用のため追加できない
// names.push("Manu");

//読み取り専用のため削除できない
// names.pop();
