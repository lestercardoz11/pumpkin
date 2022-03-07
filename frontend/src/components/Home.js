import Login from './Login';
import Signup from './Signup';

const Home = () => {
  return (
    <div className='container-fluid'>
      <div className='row bg-warning p-3'>
        <div className='col-sm-8 mx-5'>
          <h2>Pumpkin</h2>
        </div>
      </div>

      <div className='row p-4 d-flex justify-content-center'>
        <Signup />
        <div
          className='col-sm-1'
          style={{ borderRight: 'solid 1px black' }}></div>
        <div className='col-sm-1'></div>
        <Login />
      </div>
    </div>
  );
};

export default Home;
