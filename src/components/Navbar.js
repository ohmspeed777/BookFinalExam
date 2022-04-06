import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllBooks, searchBook } from '../redux/slices/booksSlices';

const Navbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!search) {
      dispatch(fetchAllBooks());
      return;
    }
    const timeout = setTimeout(() => {
      dispatch(searchBook(search));
    }, 1500);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className="navbar bg-neutral fixed top-0 z-20 px-8">
      <div className="flex-1">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">
          Books
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          ></ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
