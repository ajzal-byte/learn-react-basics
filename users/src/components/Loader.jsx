import React from 'react';
import { Oval } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='card loader'>
      <Oval />
      Loading...
    </div>
  )
}

export default Loader