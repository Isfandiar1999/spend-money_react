import React from 'react'
import BasketItem from './BasketItem'

const Basket = ({basket,products,total,resetBasket}) => {
  return (
    <>
        <div className='basket-container container'> 
            <div className='bruh'>
              {
                  basket.map((item)=>(
                      <BasketItem item={item} product={products.find(p => p.id === item.id)}/>
                  ))
              }
            </div>

            <div className='bruh1'>
              <div>
                  Toplam:${total}
              </div>
              <div>
              <button onClick={resetBasket}>Sepeti sifirla</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Basket