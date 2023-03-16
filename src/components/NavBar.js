import React, { useState } from 'react';
import styled from 'styled-components'
import Burguerbutton from './BurguerButton'

function Navbar () {
const [clicked, setClicked] = useState(false)
const handleClick = () => {
    setClicked(!clicked)
}


return (
    <>
            <NavContainer>
            <h2>Gym Fitness Exercises</h2>
            <div className={`menu ${clicked ? 'active' : ''}`}>
                <a href="#" onClick={handleClick}to="/">Inicio</a>
                <a href="#" onClick={handleClick}to="/quienessomos">Quienes somos</a>
                <a href="#" onClick={handleClick}to="/quehacemos">Qué hacemos</a>
                <a href="#" onClick={handleClick}to="/contacto">Contacto</a>
                {/* <Link onClick={handleClick}to="/iniciarsecion"><PersonIcon/></Link> */}
            </div>
            <div className="burguer">
                <Burguerbutton clicked={clicked} handleClick={handleClick}/>
            </div>
            </NavContainer>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`}/>
    </>
)
}

export default Navbar
const NavContainer = styled.nav`
h2{
    color:white;
}
    padding: .4rem;
    background-color: black;
    display:flex;
    align-items: center;
    justify-content: space-between;
a{
        text-decoration: none;
        color: white;
        margin-right:1rem;
    }
.menu{
    position:absolute;
    left:-1000px;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    transition: all .5s ease;
    a{
        color: black;
        font-size:2rem;
        display:block;
    }
    @media(min-width: 768px){
        position:initial;
        margin:0;
        a{
            font-size: 1rem;
            color: white;
            display: inline;
        }
        a:hover{
            color: #008bdc;
        }
    }
}
.menu.active{
    width:100%;
    display:block;
    position:absolute;
    margin-left:10px;
    margin-right:auto;
    top:10%;
    left:0;
    text-align:left;
    z-index:99;
    a{
        font-size: 1.5rem;
        color: black;
        margin-top: 20px;
    }
}
.burguer{
    @media(min-width: 768px){
        display:none;
    }
}

`

const BgDiv = styled.div`
    position:absolute;
    background-color: #008bdc;
    left:-1000px;
    z-index:0;
    transition: all .6s ease;
    &.active{
        top:0;
        left:0;
        width:50%;
        height:100%;
    }
    
`