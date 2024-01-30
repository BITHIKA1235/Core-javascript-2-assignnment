const person1={name:"Alice",age:25};
const person2={name:"Ravi",age:19};
function introduce(){
    console.log(`Hello, I am ${this.name}, and I am ${this.age} years old.`)
}
introduce.call(person2);