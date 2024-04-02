import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../redux/actions/productActions'

function Filter() {
  let [searchKey, setSearchKey] = useState('')
  let [sortKey, setSortKey] = useState('popular')
  let [category, setCategory] = useState('all')

  let dispatch = useDispatch()

  return (
    <div className='row justify-content-center align-items-center my-4'>
      <div className='col-md-4'>
        <input value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}
          type='text'
          placeholder='Search Products'
          className='form-control'
        />
      </div>
      <div className='col-md-2'>
        <select className='form-control' value={sortKey} onChange={(e)=>setSortKey(e.target.value)}>
          <option value='popular'>Popular</option>
          <option value='htl'>High to Low</option>
          <option value='lth'>Low to High</option>
        </select>
      </div>
      <div className='col-md-2'>
        <select className='form-control' value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option value='all'>All</option>
          <option value='electronics'>Electronics</option>
          <option value='fashion'>Fashion</option>
          <option value='mobiles'>Mobiles</option>
        </select>
      </div>
      <div className='col-md-2'>
        <button className='btn btn-dark w-100' onClick={()=>dispatch(filterProducts(searchKey, sortKey, category))}>Filter</button>
      </div>
    </div>
  );
}

export default Filter