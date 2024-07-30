import React from 'react';
import bracelet from '../bracelet';
import Card from './Card';
import Heading from './Heading';

const Bracelet = (props) => {
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
      <Heading name='Bangles & Bracelets' />
      <div className='products'>
        {
          bracelet.map((e) => {
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

export default Bracelet
