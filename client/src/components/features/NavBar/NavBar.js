import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import CartCounter from '../CartCounter/CartCounter';

class NavBar extends React.Component {
    render() {
        return (
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
                            <div>Cart</div>
                            {this.props.cartTotalPcs && <CartCounter cartTotalPcs={this.props.cartTotalPcs}/>}
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
};

export default NavBar;