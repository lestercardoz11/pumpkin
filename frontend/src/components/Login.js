import { useState } from 'react';
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
  const [error, setError] = useState('');

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
          const value = response.data[0];

          sessionStorage.setItem('username', value.username);
          sessionStorage.setItem('contributer', value.isContributer);

          if (value.isContributer) {
            console.log('contributer');
            navigate('/contributer');
          } else {
            console.log('normal');
            navigate('/normal');
          }
        }
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
    </>
  );
};

export default Login;
