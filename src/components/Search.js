import React from 'react'
import {useContext} from 'react';
import {BsSearch} from 'react-icons/bs';
import MainContext from '../context/MainContext';

function Search() {

  const {search, setSearch} = useContext(MainContext);

  const brandSearch = (e) => setSearch(e.target.value);

  return (
    <div className='search'>
      <BsSearch/>
      <input 
        type="search" 
        placeholder='Search Brands' 
        value={search} 
        onChange={brandSearch} 
      />
    </div>
  )
}

export default Search