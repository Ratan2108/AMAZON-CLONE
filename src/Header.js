import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }]=useStateValue(); 
    console.log (basket);
    return (
        <div className='header'>
        <Link to="/">
        <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'/>
        </Link>
        

        <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header_searchIcon' />
        </div>
        <div className='header__nav'>
        <div className ='header__option'>
        <span className='header__optionlineone'>Hello guest</span>
        <span className='header__optionlinetwo'>Sign In</span>

        </div>
        <div className ='header__option'>
        <span className='header__optionlineone'>Return</span>
        <span className='header__optionlinetwo'>&Order</span>

        </div>
        <div className ='header__option'>
        <span className='header__optionlineone'>Your</span>
        <span className='header__optionlinetwo'>Prime</span>

        </div>
        <Link to="/checkout">
        <div className='header__optionBasket'>
        <ShoppingCartIcon />
        <span className='header__optionlinetwo  header__basketCount'>{basket?.length}</span>
            
        </div>
        </Link>
            
        </div>
            
        </div>
    )
}

export default Header
