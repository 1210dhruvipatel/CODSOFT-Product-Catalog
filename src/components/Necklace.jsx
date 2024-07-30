import React from 'react';
import necklace from '../necklace';
import Card from './Card';
import Heading from './Heading';

const Necklace = (props) => {
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
      <Heading name='Necklaces' />
      <div className='products'>
        {
          necklace.map((e) => {
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

export default Necklace
