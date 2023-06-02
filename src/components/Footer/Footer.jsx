import React from 'react'
import { Row, Col} from 'react-bootstrap';
import logo from '../../assets/img/logo-sort-it.svg';

const Footer = () => {
  return (
    <footer style={{backgroundColor: "#fff", height: '200px'}} className='mx-4 px-5'>
      
        <Row className='py-3'>
          <Col className='d-flex justify-content-start'>
            <img src={logo} alt='img' width='115px' height='63px' />
          </Col>
          <Col>
            <p className='fw-bold'>Guide</p>
            <p className='m-0'>Items</p>
            <p className='m-0'>Container</p>
            <p className='m-0'>Map</p>
            <p className='m-0'>Zero wate shops</p>
            <p className='m-0'>Tips & Tricks</p>
          </Col>
          <Col>
            <p className='fw-bold'>Contacts</p>
            <p className='m-0'>sortit@gmail.com</p>
          </Col>
        </Row>
     
    </footer>
  )
}

export default Footer