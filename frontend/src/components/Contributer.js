import { useState } from 'react';
import Report from './Report';
import Upload from './Upload';

const Contributer = () => {
  const [nav, setNav] = useState(0);

  const renderMain = () => {
    switch (nav) {
      case 0:
        return <Upload />;

      case 1:
        return <Report />;

      default:
        return <Upload />;
    }
  };

  return (
    <div className='container-fluid h-100'>
      <div className='row bg-warning p-3'>
        <div className='col-sm-8 mx-5'>
          <h2>Pumpkin - Contributer Login</h2>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-3 p-5'>
          <p
            className={`fs-5 mb-4 ${nav === 0 ? 'fw-bold' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setNav(0)}>
            Upload Image
          </p>
          <p
            className={`fs-5 mb-4 ${nav === 1 ? 'fw-bold' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setNav(1)}>
            Download Report
          </p>
        </div>

        <div className='col-md-9 p-5'>{renderMain()}</div>
      </div>
    </div>
  );
};

export default Contributer;
