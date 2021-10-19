import React from 'react'
import styled from 'styled-components'
import MenuIcon from "@material-ui/icons/Menu"

function Header() {
    return (
       <Container>
           <a>
               <img src="/images/logo.svg" />
           </a>
           <Menu>
              <a href="#">Model S</a>
              <a href="#">Model 3</a>
              <a href="#">Model X</a>
              <a href="#">Model Y</a>
               
           </Menu>
           <RightMenu>
               <a href="#">Shop</a>
               <a href="#">Tesla Account</a>
               <CustomMenu />
           </RightMenu>
           <BurgerNav>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Used Inventory</a></li>
               <li><a href="#">Trade-in</a></li>
               <li><a href="#">Cybertruck</a></li>
               <li><a href="#">Roadester</a></li>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>
           </BurgerNav>

       </Container>
    )
}

export default Header

const Container = styled.div`
 min-height:60px;
 position:fixed;
 display:flex;
 align-items:center;
 justify-content: space-between;
 padding: 0 20px;

top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;


a{
    font-weight:600;
    padding: 0 10px;
    text-transform:uppercase;
    flex-wrap:nowrap;

}
@media(max-width:768px){
    display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
    margin-right:10px;
    text-transform:uppercase;
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
`