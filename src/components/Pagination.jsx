import React from 'react';

const Pagination = ({ records }) => {
  const itemsPerPage = 5;
  const totalPages = Math.ceil(records.length / itemsPerPage);

  return (
    <div>
      <button onClick={() => {}}>Previous</button>
      <span>Page 1 of {totalPages}</span>
      <button onClick={() => {}}>Next</button>
    </div>
  );
};

export default Pagination;
