import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import UserService from '../services/UserService';

const Signup = () => {
  const initialUserState = {
    username: '',
    password: '',
    isContributer: false,
  };

  const [user, setUser] = useState(initialUserState);
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const handleClose = () => setShow(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const register = () => {
    var data = {
      username: user.username,
      password: user.password,
      isContributer: user.isContributer,
    };

    UserService.create(data)
      .then((response) => {
        setUser(initialUserState);

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
      <div className='col-sm-4 m-5'>
        <div className='form-box'>
          <div className='form-top mb-4'>
            <div className='form-top-left'>
              <h4>Sign up</h4>
            </div>
          </div>
          <div className='form-bottom'>
            <div className='form-group'>
              <label className='sr-only mb-1' for='form-r-username'>
                Username
              </label>
              <input
                type='text'
                className='form-first-name form-control mb-2'
                id='form-r-username'
                value={user.username}
                onChange={handleInputChange}
                name='username'
                required
              />
            </div>
            <div className='form-group'>
              <label className='sr-only mb-1' for='form-r-password'>
                Password
              </label>
              <input
                type='password'
                className='form-password form-control mb-2'
                id='form-r-password'
                value={user.password}
                onChange={handleInputChange}
                name='password'
                required
              />
            </div>
            <div className='form-check mb-2'>
              <input
                className='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='normalUser'
                onClick={() => setUser({ ...user, isContributer: false })}
              />
              <label className='form-check-label' for='normalUser'>
                Normal User
              </label>
            </div>
            <div className='form-check mb-4'>
              <input
                className='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='contributerUser'
                onClick={() => setUser({ ...user, isContributer: true })}
              />
              <label className='form-check-label' for='contributerUser'>
                Contributer
              </label>
            </div>
            <button
              type='submit'
              onClick={register}
              className='btn btn-warning'>
              Sign up
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>User successfully registered!</Modal.Body>
        <Modal.Footer>
          <button className='btn btn-warning' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Signup;
