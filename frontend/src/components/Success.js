import React from 'react'

function Success({success}) {
  return (
    <div className='mt-4'>
      <div class='alert alert-success fs-5 fw-medium text-center' role='alert'>
        {success}
      </div>
    </div>
  );
}

export default Success