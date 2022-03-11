import { useNavigate } from 'react-router-dom';

const Logout = () => {
  let navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <button type='button' className='btn btn-light' onClick={logout}>
      Log out
    </button>
  );
};

export default Logout;
