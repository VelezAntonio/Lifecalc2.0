import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
background: white;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width:960px){
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100vw;
/* padding: 0 24px; */
box-shadow: 0 3px 2px -2px rgba(0,0,0,.2);


`

export const NavLogo = styled(LinkRouter)`
color: black;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
    display: none;
}`

export const NavItem = styled.li`
height: 80px;`

export const NavLinks = styled(LinkScroll) `
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover{
  transition: all 0.2s ease-in-out;
  transform: translate(5px, -5px); 
  font-weight:bold;

}
&.active{
    border-bottom: 3px solid #01bf71;
    transform: translate(5px, -5px); 
    font-weight:bold;

}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none;
}



`
export const NavBtnLink = styled(LinkRouter)`
border-radius: 50px;
background:  #db0000;
white-space: nowrap;
padding: 10px 22px;
color: white;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`

