/*21.Write a function toBytes(s)

toBytes(s) takes in a string s and returns an array of ASCII bytes formed by s.

If a character in s is invalid ASCII, the character is omitted from the returned array.

Hint: JavaScript strings have method s.charCodeAt(i) which returns the ASCII code of the character at index i of string s

const bar = 'Bar'
const foo = 'Foo'
const fooFire = 'Foo🔥'

toBytes(bar) // [ 66, 97, 114 ]
toBytes(foo) // [ 70, 111, 111 ]
toBytes(fooFire) // [ 70, 111, 111 ] because the emoji is invalid ASCII*/

const bar = "Bar";
const foo = "Foo";
const fooFire = "Foo🔥";

const toBytes = (s) => {
  const NewArr = []; //ต้องมีการประกาศเพื่อรับค่า
  for (let i = 0; i < s.length; i++) {
    const Bytes = s.charCodeAt(i);
    if (Bytes >= 0 && Bytes <= 127) {
      NewArr.push(Bytes); //ใส่ค่าลงในArray
    }
  }
  return NewArr; //ส่งค่าคืน
  /*//Answer
  const toBytes = (s) => {
    const bytes = []
    for(let i =0; i < s.length; i++){
        const char= s.charCodeAt(i)

        if(char > 255){
            continue
        }
        bytes.push(char)
    }
    return bytes
  }
  */
};

//test case
console.log(toBytes(bar)); // [ 66, 97, 114 ]
console.log(toBytes(foo)); // [ 70, 111, 111 ]
console.log(toBytes(fooFire)); // [ 70, 111, 111 ]
