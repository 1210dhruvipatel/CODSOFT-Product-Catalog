import React from 'react'
import { Link } from 'react-router-dom';
import {FaCartShopping} from 'react-icons/fa6'

const Nav = () => {
    return (
        <>
            <div className='nav'>
                <div className="navbar">
                    <div>Luxe Gems</div>
                    <div>
                        <Link to='/'>Home</Link>
                        <Link to='/bracelet'>Bracelates & Bangles</Link>
                        <Link to='/earring'>Earrings</Link>
                        <Link to='/necklace'>Necklaces</Link>
                        <Link to='/ring'>Rings</Link>
                    </div>
                    <Link to='/cart'><FaCartShopping/></Link>
                </div>
            </div>
        </>
    )
}

export default Nav
