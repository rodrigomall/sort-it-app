
import { Modal, Col, Row, Button } from 'react-bootstrap';
import arrowOut from '../../assets/img/arrow-out.svg'

const CardModal = ({show, handleClose, title, image, detail1, detail2, detail3}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}
         size='xl'
         backdrop='static'
      >
        <Modal.Body className='px-5 py-4'>
          <Row>
            <Col className='text-center py-3' >
                <Row>
                  <Col className='py-3'>
                    &nbsp;
                  </Col>
                </Row>
                <img src={image} alt='img' width='160px' height='230px' />
            </Col>
            <Col className='mx-5'>
                <Row>
                  <Col className='fw-bolder fs-5 py-3'>
                    {title}
                  </Col>
                </Row>
                <Row className='fw-bolder fs-6'>
                  <Col>
                    Allowed
                  </Col>
                </Row>
               <Row>
                <Col className='list-group-item'>
                { detail1?.description.map((d, i) => (
                    <li className='list-group-item px-2 mx-1' key={`allowed_item_${i}`}>
                      {d}
                    </li>
                  ))
                }
                </Col>
               </Row>
            </Col>
            <Col>
              <Row className='d-flex justify-content-end'>
                <Col className='mw-fc py-2'>
                  <img src={arrowOut} alt='img' width='30px' height='40px' role='button' onClick={handleClose} />
                </Col>
              </Row>
              <Row className='fw-bolder fs-6'>
                <Col>
                  Not Allowed
                </Col>
              </Row>
              <Col>
                { detail2?.description.map((d, i) => (
                    <li className='list-group-item px-2 mx-1' key={`not_allowed_item_${i}`}>
                      {d}
                    </li>
                  ))
                }
              </Col>
            </Col>
          </Row>
          <Row className='d-flex justify-content-between'>
            <Col className='fw-bolder fs-6'>Before sorting</Col>
            <Row className='d-flex justify-content-between'>
              <Col>
                { detail3?.description.map((d, i) => (
                    <li key={`item_${i}`}>
                      {d}
                    </li>
                  ))
                }
              </Col>
              <Col className='mw-fc'>
                <Button className='btn-sm w-100 border-0' variant='' style={{borderRadius: '12px', color: 'black', background:  '#C9F697', height: '44px'}}>{`Find Collection Point  ->`}</Button>
              </Col>
            </Row>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CardModal