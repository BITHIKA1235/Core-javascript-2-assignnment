function displayInfo(name,role){
    console.log(`Name: ${name}, Role:${role}`)
}
displayInfo.call(null,"Prabir","Developer");
displayInfo.apply(null,["Mithun","SDE"]);
function greet(){
    console.log(`Hello, ${this.name} !`);
}
const user={name:"pk"};
const boundGreet =greet.bind(user);
boundGreet();