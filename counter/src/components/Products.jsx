import React from 'react'

const Products = () => {

  return (
    <div>
      {product.map((product,index)=>(
        <div >
            <h1 style={{ color: "white" }}> {index}{product.productName}</h1>
            <h2>{product.price}</h2>
        </div>
      ))}
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