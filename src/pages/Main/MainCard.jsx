import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import plastic from '../../assets/img/plastic.png'; 
import CardModal from '../Modal/CardModal';


const MainCard = (props) => {
  const { id } = props;
  const [show, setShow] = useState(false);

  const onClickHide = () => {
    setShow(false);
  }

  const onClickShow= () => {
    setShow(true);
  }


  return (
    <>
      <Col className='pb-5' key={id} xs={12} md={4} lg={2} sm={12} onClick={onClickShow}>
        <Card className='text-center border-0' style={{ height: '200px', borderRadius: '24px'}}>
          <Row className='m-0'>
            <Col className=' py-3 fw-bold'>
              Plastic
            </Col>
          </Row>
          <Row className='align-items-center' style={{minHeight: '100px' }}>
            <Col>
              <img src={plastic} alt='img' width='80px' height='100px' />
            </Col>
          </Row>
        </Card>
      </Col>
      <CardModal show={show} handleClose={onClickHide}/>
    </>
  )
}

export default MainCard