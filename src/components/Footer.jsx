import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="footer bg-dark ">
        <Row>
            <Col md={5} sm={12}>
           <div className='content' style={{margin:'20px',}}>
                <h3 style={{fontWeight:'550'}}>E-Cart</h3>
                <p>E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the Internet. It encompasses a wide range of transactions, from online retail stores and auctions to business-to-business  sales and online ticketing systems.</p>
           </div>
            </Col>

            <Col md={4} sm={12}>
            <div className='links d-grid' style={{margin:'20px',}}>
                <h3 style={{fontWeight:'550'}}>Links</h3>
                <Link to={'/home'}>Home</Link>

                <Link to={'/wish'} style={{marginTop:'20px'}}>Wishlist</Link>
                <Link to={'/cart'} style={{marginTop:'20px'}}>Cart</Link>
            </div>

            </Col>

            <Col md={3} sm={12}>
            <div className="contact" style={{margin:'20px',}}>
                <h3 style={{fontWeight:'550'}}>Contact Us</h3>
                <p>Submit your email Id, so we can contact you....</p>
                <input type="email" className='form-control' placeholder='Email Id' style={{width:'85%',}} />
                <button  className='form-control' style={{borderRadius:'5px',width:'40%',marginTop:'10px'}}>Send</button>
            </div>

            </Col>
        </Row>
    </div>
    
    </>
  )
}

export default Footer
