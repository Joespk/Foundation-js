//7.Write a function mutual(arr1, arr2)

//mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2

//const class1 = ['Alice', 'Bob', 'John', 'Jane']
//const class2 = ['John', 'Foobar', 'Barbaz', 'Foobaz', 'Bob']

//console.log(mutual(class1, class2)) // ["John", "Bob"]

const mutual = (arr1: string[], arr2: string[]) => {
  const SameMutual: string[] = [];
  arr1.forEach((item1) => {
    //Loop Array1
    arr2.forEach((item2) => {
      //Loop Array2
      if (item1 === item2) {
        //เงื่อนไขเช็คว่าค่าเหมือนกันไหม
        SameMutual.push(item1);
      }
    });
  });
  return SameMutual;
};

//Test Case
const class1: string[] = ["Alice", "Bob", "John", "Jane"];
const class2: string[] = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

console.log(mutual(class1, class2));
