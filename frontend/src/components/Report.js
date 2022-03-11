import { useEffect, useState } from 'react';
import ImageService from '../services/ImageService';

const Report = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const name = sessionStorage.getItem('username');

    ImageService.findByContributer(name)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <p className='fs-5 fw-bold mb-4'>Download Report</p>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Image Name</th>
            <th scope='col'>Category</th>
            <th scope='col'>Total Downloads</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => {
            return (
              <tr key={index}>
                <th scope='row'>{row.name}</th>
                <td>{row.category}</td>
                <td>{row.downloads}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Report;
