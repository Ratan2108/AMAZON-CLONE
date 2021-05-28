import React from 'react';
import './Subtotal.css';
import CurrencyFormat  from 'react-currency-format';

function Subtotal() {
    return  <div className='subtotal'>
        <CurrencyFormat 
        renderText = {(value)=>(
            <div>
            <p>
                Subtotal ( 0items):
                <strong>0</strong>
            </p>,
            <small className='subtotal_gift'>
                <input type ="checkbox"/> This Order contains a gift 
            </small>
            </div>
            
            
        )}
        decimalScale={2}
        value ={0}
        diplayType ={"text"}
        thousandSeprator ={true}
        prefix={"$"}
            />
            <button>Proceed  to Checkout</button>
        </div>
    
}

export default Subtotal
