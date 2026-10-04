// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   const users = [{
//     name: "Aryan",
//     age: 28
// }, 
// {
//     name: "Sabar",
//     age: 18
// }, 
// {
//     name: "Ravi",
//     age: 17
// }, 
// {
//     name: "Rahul",
//     age: 12
// }, 
// {
//     name: "Rohan",
//     age: 22
// } ]
//     const [count, setCount] = useState(1);
//     const handleChange = () => {
//         setCount(prev => prev + 1);
//         console.log(count);

//     }


//     return (
//         <div>
//             <h1>counter</h1>
//             <button  onClick={handleChange}>{count}</button>

//             {
//               users.map((u,  index)=><li key={index}> {u.name} </li>)
//             }
            
//         </div>
//     )
// }

// export default App
import React from 'react'
import WelCome from './components/WelCome'
import { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(1);
    const increment = () =>{
        setCount(prev => prev + 1);
    }
    const decrement = () =>{
        setCount(prev => prev - 1);
    }

  return (
    <>
    <WelCome  name="john"/>

    <div className='flex'>
        <button onClick={decrement}>-</button>
        <h1 >{count}</h1>
        <button onClick={increment}>+</button>
    </div>
    </>
  )
}

export default App
