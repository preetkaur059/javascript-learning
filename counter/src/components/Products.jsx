import React from 'react'

const Products = () => {

  return (
    <div>
      {product.map((product,index)=>{
        return ( 
        <div >
            <h2 style={{ color: "white" }}> {index} {product.productName}</h2>
            <h3>{product.price}</h3>
        </div>
        );
      })} 
    </div>
  )
}

export default Products
const product =[
    {
        productName :"idor",
        price:6999,
    },
    {
        productName :"savage",
        price:8999,
    },
    {
        productName :"niva",
        price:5666,
    }
]