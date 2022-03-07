import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Card = (props) => {
  const { image, contributer, name, downloads } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='col-4 mb-5'>
        <div className='card' style={{ width: '14rem' }} onClick={handleShow}>
          <img src='./default.jpg' className='card-img-top' alt='...' />
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Contributer: {contributer}</li>
            <li className='list-group-item'>Image name: {name}</li>
            <li className='list-group-item'>Total downloads: {downloads}</li>
          </ul>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className='d-flex justify-content-center'>
            Download Image
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center'>
          <div className='card' style={{ width: '14rem' }} onClick={handleShow}>
            <img src='./default.jpg' className='card-img-top' alt='...' />
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Contributer: {contributer}</li>
              <li className='list-group-item'>Image name: {name}</li>
              <li className='list-group-item'>Total downloads: {downloads}</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-warning' onClick={handleClose}>
            Download
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Card;
