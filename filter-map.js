// const users = [{
//     name: "Jeevan",
//     age: 28,
//     email:"jeevan@gmail.com"
// },
// {
//     name: "Simran",
//     age: 18,
//     email:"simran@gmail.com"
// },
// {
//     name: "Raman",
//     age: 17,
//     email:"raman@gmail.com"
// },
// {
//     name: "Kiran",
//     age: 12,
//     email:"kiran@gmail.com"
// },
// {
//     name: "Param",
//     age: 22,
//     email:"param@gmail.com"
// } ];
// const res = users.find((user) => user.email === "simran@gmail.com");

// const result = users.filter((user)=>{
// if(user.age >= 18)
//     return true
// })

// const result = users.filter((user)=> user.age >= 18 ).map((user)=> user.name );

// console.log(res);

const product = [
  {
    productName: "Perfume1",
    price: 1500,
    category: "Women",
  },
  {
    productName: "Perfume2",
    price: 1600,
    category: "Men",
  },
  {
    productName: "Perfume3",
    price: 1700,
    category: "Women",
  },
  {
    productName: "Perfume4",
    price: 1800,
    category: "Men",
  },
  {
    productName: "Perfume5",
    price: 1900,
    category: "Women",
  },
];


const {productName, price} = product[0]

const newProducts = [
    ...product, 
    {

    }
]


console.log(productName);
console.log(price);
console.log('newProducts: ', newProducts);
