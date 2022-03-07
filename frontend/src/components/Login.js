import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();

  const initialUserState = {
    username: '',
    password: '',
    isContributer: false,
  };

  const [user, setUser] = useState(initialUserState);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    var data = {
      username: user.username,
      password: user.password,
    };

    UserService.get(data)
      .then((response) => {
        if (response.data) {
          const value = response.data;
          setUser({
            username: value.username,
            password: value.password,
            isContributer: value.isContributer,
          });

          sessionStorage.setItem('user', user);

          if (value.isContributer) {
            console.log('contributer');
            navigate('/contributer');
          } else {
            console.log('normal');
            navigate('/normal');
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='col-sm-4 m-5'>
      <div className='form-box'>
        <div className='form-top mb-4'>
          <div className='form-top-left'>
            <h4>Login</h4>
          </div>
        </div>
        <div className='form-bottom'>
          <div className='form-group'>
            <label className='sr-only mb-1' for='login-username'>
              Username
            </label>
            <input
              type='text'
              className='form-username form-control mb-2'
              id='login-username'
              value={user.username}
              onChange={handleInputChange}
              name='username'
              required
            />
          </div>
          <div className='form-group'>
            <label className='sr-only mb-1' for='login-password'>
              Password
            </label>
            <input
              type='password'
              className='form-password form-control mb-4'
              id='login-password'
              value={user.password}
              onChange={handleInputChange}
              name='password'
              required
            />
          </div>
          <button type='submit' onClick={login} className='btn btn-warning'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
