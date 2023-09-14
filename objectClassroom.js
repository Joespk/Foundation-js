const person = {
  name: "John",
  age: 20,
  pet: {
    kind: "Rabbit",
    age: 2,
  },
};

const keyName = "name";

console.log("Name:", person.name); //* Access using dot notation //dot nation using not .Keyname because person have KeyName in object
console.log("Name", person["name"]); //* Access using bracket notation
console.log("Name", person[keyName]); //* Access using bracket notation using const keyName

// * Review Reference Type
//เมื่อใส่ค่าใหม่ ค่าในobjectจะเปลี่ยน เพราะ keyในobject เป็น pointer
const person2 = person;
person2.name = "Joe";

console.log("person 1:", person);
console.log("person 2:", person2);

//*Array of object:data from fetching data
const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];
