import React from 'react';
import './Checkout.css';
import  Subtotal from  "./Subtotal";

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/Scrubs--sponges_750x300.jpg' />
            <div className='checkout__title'>
                <h2  >
                    basket
                </h2>
                {/*h1 */}
                {/*h2 */}
                {/*h2 */}
                {/*h2 */}
                {/*h2 */}
            </div>
            </div>
            <div className='checkout__right'>
            <Subtotal/>

            </div>

        </div>
    )
}

export default Checkout
