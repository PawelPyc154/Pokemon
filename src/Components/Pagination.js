import React, { useState, useEffect } from 'react';
import './Pagination.scss';
import { Link, useParams } from 'react-router-dom';

const Pagination = () => {
  const [counterPage, setCounterPage] = useState(1);
  const { page } = useParams();

  useEffect(() => {
    setCounterPage(Number(page));
  }, []);

  return (
    <div className="ContainerPagination">
      <Link
        to={`/${counterPage - 1}`}
        onClick={() => setCounterPage(counterPage - 1)}
        className={counterPage <= 1 ? 'disabledLink' : null}
      >
        left
      </Link>

      <div>{counterPage}</div>
      <Link
        to={`/${counterPage + 1}`}
        onClick={() => setCounterPage(counterPage + 1)}
        className={counterPage >= 13 ? 'disabledLink' : null}
      >
        right
      </Link>
    </div>
  );
};

export default Pagination;
