import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ImageService from '../services/ImageService';

const Card = (props) => {
  const { contributer, name, downloads } = props.data;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const download = () => {
    const data = {
      contributer,
      name,
      downloads,
    };
    ImageService.download(data)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className='col-4 mb-5'>
        <div className='card' style={{ width: '14rem' }} onClick={handleShow}>
          <img
            src={`http://localhost:8080/images/${name}`}
            className='card-img-top w-100'
            style={{ height: '200px', objectFit: 'cover' }}
            alt='...'
            onerror="this.onerror=null;this.src='./default.jpg';"
          />
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
            <img
              src={`http://localhost:8080/images/${name}`}
              className='card-img-top w-100'
              style={{ height: '200px', objectFit: 'cover' }}
              alt='...'
              onError={"this.onerror=null;this.src='./default.jpg';"}
            />
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Contributer: {contributer}</li>
              <li className='list-group-item'>Image name: {name}</li>
              <li className='list-group-item'>Total downloads: {downloads}</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-warning' onClick={download}>
            Download
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Card;
