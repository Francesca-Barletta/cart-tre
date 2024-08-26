import React from 'react'
import { useGlobalContext } from '../context/context';
import formatNumber from '../utils/formatNumber';
const TotalBox = () => {
  const {total} = useGlobalContext();
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3 total-box mb-3">
             <div className='total-header'>
                <h4>Carrello</h4>
             </div>
                <h6 className='text-center fw-bold'>Totale:</h6>
                <h6 className='text-center'>{formatNumber(total)}</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TotalBox