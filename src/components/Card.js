import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({
  title,
  isbn,
  pageCount,
  thumbnailUrl,
  shortDescription,
  longDescription,
  status,
  authors,
  categories,
  publishedDate,
}) {
  return (
    <div className="card w-96 bg-base-300 shadow-xl mb-4 break-inside-avoid-column">
      <figure className="mt-4">
        <img src={thumbnailUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{status}</div>
        </h2>
        <h2 className="text-primary ">{authors.join(', ')}</h2>
        <h4 className="text-neutral-content mb-4">{isbn}</h4>
        <p className="mb-4">{shortDescription}</p>
        <h6 className="text-secondary-content">pages: {pageCount}</h6>
        <h6 className="text-secondary-content">
          published:{' '}
          {publishedDate &&
            publishedDate['$date'] &&
            new Intl.DateTimeFormat(['en-US', 'th-TH']).format(
              new Date(publishedDate['$date'])
            )}
        </h6>
        <div className="card-actions justify-end">
          <button className="btn btn-primary mt-2">
            <Link to={'/books/' + isbn}>View Detail</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
