import React, { useRef } from 'react'
import { Button, Container } from 'reactstrap';
import logo from '../../images/sieclogo.png'
import './header.css'
import { Link } from '@mui/material';

function createData(display, url){
  return { display, url}
}

const navLinks = [
  createData('Home', '#'),
  createData('About', '#'),
  createData('Courses', '#')
]

function Header() {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu")

  return (
   <header className='header'>
    <Container>
      <div className="navigation d-flex align-items-center justify-content-between">
        <div className="logo">
          <img src={logo} height='35' width='35'/>
          <h2 d-flex align-items-center gap-1>Test Masters</h2>
        </div>

        <div className="nav d-flex align-items-center gap-5">
          <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav__list">
              {navLinks.map((item)=> (
              <li key={item.display} className="nav__item">
                <a href={item.url}>{item.display}</a>
              </li>
              ))}
            </ul>
          </div>

          <div className="nav__right">
            <a href='https://test-masters-frontend-classroom-management-system-seven.vercel.app/signup' target="_blank">
            <Button>
              Register
            </Button>
            </a>
            <a href='https://test-masters-frontend-classroom-management-system-seven.vercel.app' target="_blank">
            <Button>
             Login
            </Button>
            </a>
          </div>
        </div>

        <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div> 
      </div>
    </Container>
   </header>
  )
}

export default Header
