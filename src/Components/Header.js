import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Wrapper=styled.div`
margin: 0 ;
       
      

    .navlinks{
        display:flex
       
    }
    .link{
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 14px;
        font-size:20px
    }
    .cart{
      margin-left: auto;
      margin-right: 15px;
      margin-top: 14px;
      font-size:30px
    }
    .cart-total-item{
      font-size:20px
      
    }
    `
const Header = () => {
    
  return (
    <Wrapper className='container'>
      <div className="navlinks">
        <NavLink className='link' to={'/'}>Home</NavLink>
        <NavLink className='link' to={'/products'}>Products</NavLink>
        <NavLink className='link' to={'/contact'}>Contact</NavLink>
        <NavLink className='link' to={'/about'}>About</NavLink>
        <NavLink className='cart' to={'/cart'}><AiOutlineShoppingCart/><span className='cart-total-item'>0</span></NavLink>
      </div>
    </Wrapper>
  )
}

export default Header
