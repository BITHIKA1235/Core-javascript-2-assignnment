const contactMap=new Map()
//adding contacts to the map
contactMap.set("John",{
    age:30,
    email:"john@example.com",
    location:"Kolkata",
});
contactMap.set("Alice",{
    age:25,
    email:"alice@example.com",
    location:"Mumbai",
});
contactMap.set("Bosh",{
    age:35,
    email:"Bosh@example.com",
    location:"Bangalore",
})
//Function to retrieve contact details based on name
function getContact(name){
    return contactMap.get(name);
}
console.log(getContact("John"));