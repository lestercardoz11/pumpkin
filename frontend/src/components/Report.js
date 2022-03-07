const Report = () => {
  return (
    <>
      <p className='fs-5 fw-bold mb-4'>Download Report</p>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Image Name</th>
            <th scope='col'>Category</th>
            <th scope='col'>Total Downloads</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Macbook</th>
            <td>Technology</td>
            <td>1000</td>
          </tr>
          <tr>
            <th scope='row'>Macbook</th>
            <td>Technology</td>
            <td>1000</td>
          </tr>
        </tbody>
      </table>
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
    </>
  );
};

export default Report;
