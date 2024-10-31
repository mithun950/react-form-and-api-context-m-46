
import PropTypes from 'prop-types'
import Dady from './Dady/Dady'
import Uncle from '../Uncle/Uncle'
import Auntie from '../Auntie/Auntie'
import { createContext } from 'react';


function Grandpa() {


   const assets = 'diamond ring';
   const gift = 'gold'

    // context api diye props pathano
  export  const AssetsContext = createContext('silver')

  return (
   <div className='border-2 mt-12 p-6 '>
    <h3>Grandpa</h3>


    {/* AssetsContext er A capital letter hobe r .Provider must dite hobe api context korte chaile  stathe value must dite hobe */}
    <AssetsContext.Provider value='gold'>
         
    <div className='border-2 p-6 mt-6 flex gap-3'>
      <Dady className="" assets={assets}></Dady>
      <Uncle gift={gift} ></Uncle>
      <Auntie></Auntie>
    </div>
    </AssetsContext.Provider>
    </div>
  )
}

Grandpa.propTypes = {

}

export default Grandpa

