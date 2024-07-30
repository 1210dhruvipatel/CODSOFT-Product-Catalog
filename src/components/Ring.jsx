import React from 'react'
import rings from '../ring';
import Heading from './Heading';
import Card from './Card';

const Ring = (props) => {
  const { setCart,cart,qty} = props;
  const onBuy = (id,imgsrc,name,price) =>{
    let note = {id,imgsrc,name,price,qty}
    let x;
    cart.find((e)=>{
      x = e.id === id;
      return x;
    })
    setCart((prev)=>{
      return x ? ([...prev]): ( [...prev,note])
    });
  }
  return (
    <>
      <Heading name='Rings' />
      <div className='products'>
        {
          rings.map((e) => {
            return (
              <Card
                key={e.id}
                id={e.id} 
                imgsrc={e.imgsrc}
                name={e.name}
                price={e.price}
                onBuy={onBuy} />
            );
          })
        }
      </div>
    </>
  )
}

export default Ring
