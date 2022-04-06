import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { fetchOneBook, selectBooks } from '../../redux/slices/booksSlices';

const Detail = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const { single: book } = useSelector(selectBooks);

  useEffect(() => {
    dispatch(fetchOneBook(param.id));
  }, [param.id]);

  return (
    <>
      <Navbar />
      <div className="mt-24 container mx-auto">
        <div className="max-w-5xl mx-auto ">
          <div className="card card-side bg-base-300 shadow-xl">
            <figure>
              <img
                src={book?.thumbnailUrl}
                alt={book?.title}
                className="w-80"
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title text-primary">{book?.title}</h1>
              <h4 className="text-secondary-content">
                Authors: {book?.authors.join(', ')}
              </h4>
              <h4 className="text-secondary-content">
                Categories: {book?.categories.join(', ')}
              </h4>
              <h4 className="text-info-content">
                Published::{' '}
                {book?.publishedDate &&
                  book?.publishedDate['$date'] &&
                  new Intl.DateTimeFormat(['en-US', 'th-TH']).format(
                    new Date(book?.publishedDate['$date'])
                  )}
              </h4>
              <p className="mt-4">{book?.longDescription}</p>
              <div class="card-actions justify-end mt-4">
                <div class="badge badge-outline p-4">
                  Pages : {book?.pageCount}
                </div>
                <div class="badge badge-outline p-4">
                  Status : {book?.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
