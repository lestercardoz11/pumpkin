import Card from './Card';

const Normal = () => {
  return (
    <div className='container-fluid h-100'>
      <div className='row bg-warning p-3'>
        <div className='col-sm-8 mx-5'>
          <h2>Pumpkin - Normal Login</h2>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-3 p-5'>
          <p className='fs-5 fw-bold mb-4'>Category</p>
          <div className='form-check mb-3'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='technology'
            />
            <label className='form-check-label' for='technology'>
              Technology
            </label>
          </div>
          <div className='form-check mb-3'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='marketing'
            />
            <label className='form-check-label' for='marketing'>
              Marketing
            </label>
          </div>
          <div className='form-check mb-3'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='b2b'
            />
            <label className='form-check-label' for='b2b'>
              B2B
            </label>
          </div>
        </div>

        <div className='col-md-9 p-5'>
          <div className='row'>
            <Card contributer={'Alex'} name={'Birds'} downloads={'1001'} />
            <Card contributer={'Alex1'} name={'Birds1'} downloads={'1002'} />
            <Card contributer={'Alex2'} name={'Birds2'} downloads={'1003'} />
            <Card contributer={'Alex3'} name={'Birds3'} downloads={'1004'} />
            <Card contributer={'Alex4'} name={'Birds4'} downloads={'1005'} />
          </div>

          <nav aria-label='Page navigation'>
            <ul className='pagination justify-content-end'>
              <li type='button' className='page-item'>
                <span className='page-link' aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                </span>
              </li>
              <li type='button' className='page-item'>
                <span className='page-link'>1</span>
              </li>
              <li type='button' className='page-item'>
                <span className='page-link'>2</span>
              </li>
              <li type='button' className='page-item'>
                <span className='page-link'>3</span>
              </li>
              <li type='button' className='page-item'>
                <span className='page-link' aria-label='Next'>
                  <span aria-hidden='true'>&raquo;</span>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Normal;
