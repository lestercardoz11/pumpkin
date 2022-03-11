import { useState } from 'react';

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {
  const [pages] = useState(
    Math.round(data.length / (dataLimit > pageLimit ? dataLimit : pageLimit))
  );
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      {getPaginatedData().map((d, idx) => (
        <RenderComponent key={idx} data={d} />
      ))}

      <nav aria-label='Page navigation'>
        <ul className='pagination justify-content-end'>
          <li
            type='button'
            className={`page-item  ${
              currentPage === 1 ? 'pe-none' : 'pe-auto'
            }`}
            onClick={goToPreviousPage}>
            <span className='page-link' aria-label='Previous'>
              <span aria-hidden='true'>&laquo;</span>
            </span>
          </li>

          {getPaginationGroup().map((item, index) => (
            <li
              type='button'
              key={index}
              onClick={changePage}
              className={`page-item ${
                currentPage === item ? 'fw-bold' : null
              }`}>
              <span className='page-link'>{item}</span>
            </li>
          ))}

          <li
            type='button'
            onClick={goToNextPage}
            className={`page-item ${
              currentPage === pages ? 'pe-none' : 'pe-auto'
            }`}>
            <span className='page-link' aria-label='Next'>
              <span aria-hidden='true'>&raquo;</span>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
