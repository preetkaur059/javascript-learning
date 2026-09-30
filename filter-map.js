const users = [{
    name: "Jeevan",
    age: 28,
    email:"jeevan@gmail.com"
}, 
{
    name: "Simran",
    age: 18,
    email:"simran@gmail.com"
}, 
{
    name: "Raman",
    age: 17,
    email:"raman@gmail.com"
}, 
{
    name: "Kiran",
    age: 12,
    email:"kiran@gmail.com"
}, 
{
    name: "Param",
    age: 22,
    email:"param@gmail.com"
} ];
const res = users.find((user) => user.email === "simran@gmail.com");

// const result = users.filter((user)=>{
// if(user.age >= 18)
//     return true
// })

// const result = users.filter((user)=> user.age >= 18 ).map((user)=> user.name );


console.log(res);