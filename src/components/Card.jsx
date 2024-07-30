import React from 'react'

const Card = (props) => {
  const { imgsrc, name, price, id, onBuy } = props
  const addToCart = () => {
    onBuy(id,imgsrc,name,price);
  }

  return (
    <div className='cards'>
      <div className="card">
        <div className="imgc">
          <img src={imgsrc} alt="" />
        </div>
        <div className='bottom'>
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <div className="buy" onClick={addToCart}>
          Add To Cart
        </div>
      </div>
    </div>
  )
}

export default Card
