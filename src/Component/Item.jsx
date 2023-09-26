import React from 'react'
import  {BsChevronCompactDown  ,BsChevronCompactUp }  from "react-icons/bs"
import  { useDispatch } from "react-redux"
import { decrease, increase, removeItem } from './Slice'

function Item({ id, title, price, img , quant}) {
  const dispatch = useDispatch()
  return (
    <div className='cartItem'>
<img src={img} alt="" />
<div className='cartInfo'>
    <h4>{title}</h4>
    <h4>{price} TL</h4>
    <div>
        <button className='cartQuantityButton' onClick={()=>{dispatch(increase(id))} }> <BsChevronCompactUp/> </button>
        <p className='cartQuantity'>{quant}</p>
        <button className='cartQuantityButton' onClick={()=>{dispatch(decrease(id))}}><BsChevronCompactDown/></button>
    </div>
    <button className='cartDeleteButtton' onClick={()=>{dispatch(removeItem(id))} }>Delete</button>
</div>

    </div>
  )
}

export default Item