import React from 'react'
const FormatePrice = (props) => {
   const {price}=props
    const Newprice=new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' } ,{ maximumSignificantDigits: 2 }).format(parseInt(price)/100)

  return (
    <h3>
      {Newprice}
    </h3>
  )
}

export default FormatePrice
