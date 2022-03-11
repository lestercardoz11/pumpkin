import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ImageService from '../services/ImageService';

const Upload = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');
  const [extension, setExtension] = useState('');
  const [category, setCategory] = useState('Technology');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

  const handleClose = () => setShow(false);

  const saveFile = (e) => {
    const image = e.target.files[0];
    if (image) {
      setFile(image);

      const ext = '.' + image.name.substring(image.name.lastIndexOf('.') + 1);
      setExtension(ext);
    }
  };

  const submitForm = () => {
    const username = sessionStorage.getItem('username');

    if (username && file && category) {
      const data = {
        contributer: username,
        name: fileName + extension,
        category: category,
      };

      ImageService.create(data)
        .then((response) => {
          console.log(response);

          uploadHandler();
        })
        .catch((err) => {
          console.log(err);
          setError(err?.response?.data?.message ?? 'Unexpected error');
        });
    } else {
      setError('Please enter all the values');
    }
  };

  const uploadHandler = () => {
    const data = new FormData();

    data.append('file', file, fileName + extension);

    ImageService.upload(data)
      .then((res) => {
        setShow(true);
      })
      .catch((err) => {
        console.log(err);
        setError(err?.response?.data?.message ?? 'Unexpected error');
      });
  };

  return (
    <>
      {error ? (
        <div
          className='position-absolute top-20 start-50 translate-middle alert alert-danger alert-dismissible fade show w-50'
          role='alert'>
          {error}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() => setError('')}></button>
        </div>
      ) : null}
      <div className='row g-3'>
        <p className='fs-5 fw-bold mb-4'>Upload Image</p>
        <div className='col-md-8'>
          <label htmlFor='image-name' className='form-label'>
            Image name
          </label>
          <input
            type='text'
            className='form-control'
            id='image-name'
            name='image-name'
            onChange={(e) => setFileName(e.target.value)}
          />
        </div>
        <div className='col-md-8'>
          <label htmlFor='image' className='form-label'>
            Image
          </label>
          <input
            type='file'
            className='form-control'
            id='image'
            name='file'
            onChange={saveFile}
          />
        </div>
        <div className='col-md-8'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <select
            id='category'
            className='form-select'
            name='category'
            onChange={(e) => setCategory(e.target.value)}>
            <option>Technology</option>
            <option>Marketing</option>
            <option>B2B</option>
          </select>
        </div>
        <div className='col-12'>
          <button
            type='submit'
            className='btn btn-warning'
            onClick={submitForm}>
            Upload
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>Image has been successfully uploaded!</Modal.Body>
        <Modal.Footer>
          <button className='btn btn-warning' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Upload;
