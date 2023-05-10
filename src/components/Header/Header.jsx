import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col} from 'react-bootstrap';
import iosArrowDown from '../../assets/img/ios-arrow-down.svg'
import logo from '../../assets/img/logo-sort-it.svg'; 

const Header = () => {
  return (
    <nav style={{backgroundColor: "#fff", height: '78px', paddingRight: '2rem', paddingLeft: '2rem'}}>
      <Container fluid>
        <Row className='py-3'>
          <Col className='d-flex justify-content-start'>
            <img src={logo} alt='img' width='67px' height='37px' />
          </Col>
          <Col></Col>
          <Col className='mw-fc'>
            <Button variant='white' className='fw-bolder' style={{borderRadius: '50px'}}>About</Button>
          </Col>
          <Col className='mw-fc'>
            <Button variant='white' className='fw-bolder' style={{borderRadius: '50px'}}>Contacts</Button>
          </Col>
          <Col className='mw-fc'>
            <Button variant='white' className='fw-bolder' style={{borderRadius: '50px', overflow: 'hidden'}}>ENG</Button>
            <img src={iosArrowDown} alt='img' width='15px' height='15px' role='button' />
          </Col>
        </Row>
      </Container>
    </nav>
  )
}
export default Header;


