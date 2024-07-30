import React from 'react'
import CartCard from './CartCard'

const Cart = (props) => {
  const { cart, total, setTotal, setCart, qty, setQty } = props;
  console.log(cart);
  const onDelete = (e) => {
    console.log(e)
    const item = cart.filter((elem) => {
      return e !== elem.id;
    })
    setCart(item)
  }
  let x = 0;
  let q = 0;
  cart.map((item) => {
    return (isNaN(item.qty) ? ( x = 0, q=0 ):( x += item.qty * item.price, q += item.qty ))
  })
  setTotal(x)
  let tQty = q;
  return (
    <>
      <div className='cart'>
        {cart.map((e) => {
          return (
            <>
              <CartCard
                key={e.id}
                id={e.id}
                name={e.name}
                imgsrc={e.imgsrc}
                price={e.price}
                place={e.qty}
                cart={cart}
                setCart={setCart}
                setQty={setQty}
                qty={qty}
                total={total}
                setTotal={setTotal}
                onDelete={() => { onDelete(e.id) }}
              />
            </>
          )
        })
        }
      </div>
      <div className="total">
        <div> Total Cost: {total} </div>
        <div> Total Items: {tQty} </div>
      </div>
    </>
  )
}

export default Cart
