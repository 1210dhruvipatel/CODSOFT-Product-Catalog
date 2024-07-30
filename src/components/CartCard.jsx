import React from 'react'

const CartCard = (props) => {
    const { id, imgsrc, name, price, setCart, cart, onDelete, place, setQty } = props;

    const changePrice = (id, qty) => {
        console.log(cart)
        setCart(cart.map((item) => {
            return (
                item.id === id ? { ...item, qty: qty } : item
            )
        }));
        setQty(1)
    }
    const increment = (id) => {
        setCart(cart.map((item) => {
            return (
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        }));
    }
    const decrement = (id) => {
        let i = cart.map((item) => {
            if (item.qty === 1) {
                return (item)
            } else {
                return (item.id === id ? { ...item, qty: item.qty - 1 } : item)
            }
        });
        setCart(i)
    }
    const deleteItem = () => {
        onDelete()
    }
    return (
        <>
            <div className="cart-card">
                <div className='data'>
                    <img src={imgsrc} alt="" />
                    <div>
                        <h2>{name}</h2>
                        <p>{price}</p>
                        <button onClick={() => { decrement(id) }}>-</button><input type="number" value={place} placeholder='Qty' required id="" min='1' onChange={(e) => {
                            changePrice(id, parseInt(e.target.value, 10))
                        }} /><button onClick={() => { increment(id) }}>+</button>
                    </div>
                </div>
                <button onClick={() => { deleteItem(id) }}>X</button>
            </div>
        </>
    )
}

export default CartCard
