import { useSelector,useDispatch } from 'react-redux'
import Item from './Item'
import { clearCart } from './Slice'

function List() {
    const dispatch  = useDispatch()
    const { cartItems, quantity , total } = useSelector( (store) => store.cart  )
  return (
    <div>
{ quantity <1 ?  (
    <section className='cart'>
        <header>
            <h2>Cart is</h2>
            <h4>empty</h4>
        </header>
    </section>
) :   
<section className='cart'>
<header>
    <h2>Cart is</h2>
</header>
<div>
    { cartItems.map( (item,index) => {
        return <Item  key={index} {...item}  />
    }  )   }
</div>
<footer>
    <hr />
    <div>
        <h4>
        Total amount <span> {total}TL</span>
        </h4>
    </div>
    <button className='cartClearButton' onClick={()=> dispatch(clearCart())}>Clear</button>
</footer>
</section> }
    </div>
  )
}

export default List