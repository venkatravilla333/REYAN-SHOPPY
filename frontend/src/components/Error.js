import React from 'react'

function Error({error}) {
  return (
    <div className='mt-4'>
      <div className='alert alert-danger fs-5 fw-medium text-center' role='alert'>
       {error}
      </div>
    </div>
  );
}

export default Error