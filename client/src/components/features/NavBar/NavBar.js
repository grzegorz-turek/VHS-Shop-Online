import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import CartCounter from '../CartCounter/CartCounter';
import CartSvg from '../CartSvg/CartSvg';

const NavBar = (props) => (
    <nav className='navbar'>
        <div className='navbar__container'>
            <div className='navbar__logo'>
                <Link to='/'>VHS Online</Link>
            </div>
            <div className='navbar__links'>
                <Link to='/' className='navbar__links__single'>Home</Link>
                <Link to='/faq' className='navbar__links__single'>Faq</Link>
                <Link to='/rules' className='navbar__links__single'>Rules</Link>
                <Link to='/contact' className='navbar__links__single'>Contact</Link>
                <Link to='/cart' className='navbar__links__single__cart'>
                    <CartSvg width='36px' height='36px' />
                    {props.cartTotalPcs > 0 && <CartCounter cartTotalPcs={props.cartTotalPcs}/>}
                </Link>
            </div>
        </div>
    </nav>
)

export default NavBar;