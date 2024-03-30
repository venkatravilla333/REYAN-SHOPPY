import React from 'react'

function Spinner() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className='spinner-border mt-5' role='status' style={{width:'40px', height:'40px'}}>
        <span class='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}

export default Spinner