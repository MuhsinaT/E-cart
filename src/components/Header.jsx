import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchWithKey } from '../Redux/productSlice';
import { useState } from 'react';

function Header() {
  const { items } = useSelector((state) => state.wishReducer);
  const { cart } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  const [key, setKey] = useState("");

  console.log(items);

  return (
    <>
      <Navbar className="bg-body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fa-solid fa-cart-shopping" style={{ color: "#0e4d92", marginRight: '8px' }} />
              E-Cart
            </Link>
          </Navbar.Brand>

          {/* Toggler for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            
            {/* Search Bar */}
            <div className='d-flex my-2 my-lg-0'>
              <input
                type="text"
                className='form-control me-2'
                onChange={(e) => setKey(e.target.value)}
                placeholder='Search'
                // style={{ width: '100%' }}
              />
              <button className='btn btn-outline-dark' onClick={() => dispatch(searchWithKey(key))}>
                Search
              </button>
            </div>

            {/* Wishlist and Cart Buttons */}
            <div className='d-flex align-items-center my-2 my-lg-0'>
              <Link className='btn border border-1 border-dark me-3 d-flex align-items-center' to={'/wish'}>
                <i className="fa-solid fa-heart" style={{ color: "#e01024", marginRight: '4px' }} />
                Wishlist
                <span className='badge bg-dark ms-1'>{items?.length}</span>
              </Link>

              <Link className='btn border border-1 border-dark me-3 d-flex align-items-center' to={'/cart'}>
                <i className="fa-solid fa-cart-shopping" style={{ color: "#149f49", marginRight: '4px' }} />
                Cart
                <span className='badge bg-dark ms-1'>{cart?.length}</span>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
