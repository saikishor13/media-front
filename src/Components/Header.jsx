import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <Navbar className="" style={{backgroundColor:"#f2f2f2"}}>
        <Container>
          <Navbar.Brand href="">
            <Link to={'/'} style={{textDecoration:"none",color:'black'}}>
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/128/16322/16322683.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              MEDIA PLAYER
            </Link> 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
