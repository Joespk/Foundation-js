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

//forEach
data.forEach((person, idx) => {
  console.log("Person", idx + 1); //เวลาจะทำอะไรที่เกี่ยวกับMathให้ใส่()นำก่อนเสมอ
  console.log("Name :", person.name);
  console.log("age :", person.age);
  console.log("Job :", person.job);
  console.log("___________________");
});

//Reduce
const resultString = data.reduce((PreVal, val, idx) => {
  return `${PreVal}\n
  Person ${idx + 1}\n
  Name: ${val.name}\n
  Age: ${val.age}\n
  Job: ${val.job}\n
  __________________`;
}, "");

console.log(resultString);
