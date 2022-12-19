import React from 'react'
const CURRENCY_FORMATER = new Intl.NumberFormat(undefined,{
currency:"INR",style:"currency"
}) 
const formatCurrency = (number:number) => {
  return CURRENCY_FORMATER.format(number)
}

export default formatCurrency