import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap' 
import EcoShopModal from '../Modal/EcoShopModal';
import arrowIn from '../../assets/img/arrow-in.svg';


const EcoShopCard = ({id, title, image, detail1, detail2, detail3 }) => {
  const [show, setShow] = useState(false);

  const onClickHide = () => {
    setShow(false);
  }

  const onClickShow= () => {
    setShow(true);
  }

  const propsEcoShop = {
    id,
    title,
    image,
    detail1,
    detail2,
    detail3
  }

  return (
    <>
      <Col className='pb-5' key={id} xs={12} md={4} lg={2} sm={12}>
        <Card className='text-center border-0 card-box' role='button' style={{ height: '200px', borderRadius: '24px'}}>
          <Row className='m-0'>
            <Col className=' py-3 fw-bold'>
                {title}
            </Col>
          </Row>
          <Row className='align-items-center' style={{minHeight: '100px' }}>
            <Col>
              <img src={image} alt='img' width='100px' height='100px' />
            </Col>
          </Row>
          <Row className='d-flex align-items-start'>
            <Col>
            </Col>
            <Col onClick={onClickShow}>
              <img src={arrowIn} alt='img' width='30px' height='40px' role='button' />
            </Col>
          </Row>
        </Card>
      </Col>
      <EcoShopModal show={show} handleClose={onClickHide} {...propsEcoShop} />
    </>
  )
}

export default EcoShopCard;