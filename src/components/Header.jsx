import React from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispatch=useDispatch();
  return (
    <>
      <Link to={'/'} style={{textDecoration:"none"}}>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple69/v4/89/1f/15/891f151d-0ed6-785a-7889-21a87aef7212/source/512x512bb.jpg" alt=""
              height={"50px"} width={"100px"} />
            <Navbar.Brand href="#home">Palaaram</Navbar.Brand>
            <input type="text" className='form-control w-25' placeholder='Search by neighbourhood'
            onChange={(e)=>dispatch(search(e.target.value))} />
          </Container>
        </Navbar>
      </Link>
    </>
  )
}

export default Header