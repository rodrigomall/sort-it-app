
import { Modal, Col, Row, Button } from 'react-bootstrap';
import arrowIn from '../../assets/img/arrow-out.svg'

const TipsTricksModal = ({show, handleClose, title, image, detail1}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}
         size='xl'
         backdrop='static'
      >
        <Modal.Body className='px-5 py-4'>
          <Row>
            <Col className='mw-fc text-center px-5 py-3' >
                <Row>
                  <Col className='py-3'>
                    &nbsp;
                  </Col>
                </Row>
                <img src={image} alt='img' width='160px' height='230px' />
            </Col>
            <Col className='mx-5'>
                <Row>
                  <Col className='fw-bolder text-center display-6 fs-5 py-3'>
                    {title}
                  </Col>
                  <Col className='mw-fc py-2'>
                    <img src={arrowIn} alt='img' width='30px' height='40px' role='button' onClick={handleClose} />
                  </Col>
                </Row>
               <Row>
                <Col className='list-group-item'>
                  {detail1?.description}
                </Col>
               </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TipsTricksModal;