import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageService from '../services/ImageService';
import Card from './Card';
import Logout from './Logout';
import Pagination from './Pagination';

const Normal = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const username = sessionStorage.getItem('username');

    if (!username) {
      sessionStorage.clear();
      navigate('/');
    }

    ImageService.get()
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filter = (e) => {
    const value = e.target.value;
    ImageService.filter(value)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container-fluid h-100'>
      <div className='row bg-warning p-3'>
        <div className=' d-flex justify-content-between'>
          <div className='col-sm-8 mx-5'>
            <h2>Pumpkin - Normal Login</h2>
          </div>
          <Logout />
        </div>
      </div>

      <div className='row'>
        <div className='col-md-3 p-5'>
          <p className='fs-5 fw-bold mb-4'>Category</p>
          <div className='form-check mb-3'>
            <input
              className='form-check-input'
              type='radio'
              name='categoryRadio'
              value='Technology'
              id='technology'
              onClick={(e) => filter(e)}
            />
            <label className='form-check-label' for='technology'>
              Technology
            </label>
          </div>
          <div className='form-check mb-3'>
            <input
              className='form-check-input'
              type='radio'
              name='categoryRadio'
              value='Marketing'
              id='marketing'
              onClick={(e) => filter(e)}
            />
            <label className='form-check-label' for='marketing'>
              Marketing
            </label>
          </div>
          <div className='form-check mb-3'>
            <input
              className='form-check-input'
              type='radio'
              name='categoryRadio'
              value='B2B'
              id='b2b'
              onClick={(e) => filter(e)}
            />
            <label className='form-check-label' for='b2b'>
              B2B
            </label>
          </div>
        </div>

        <div className='col-md-9 p-5'>
          <div className='row'>
            {data.length > 0 ? (
              <Pagination
                data={data}
                RenderComponent={Card}
                pageLimit={
                  Math.ceil(data.length / 3) < 4
                    ? Math.ceil(data.length / 3)
                    : 4
                }
                dataLimit={3}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Normal;
