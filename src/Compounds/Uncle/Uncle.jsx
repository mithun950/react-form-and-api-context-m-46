
import PropTypes from 'prop-types'
import Cousin from '../Cousin/Cousin'

function Uncle({gift}) {
  return (
    <div className='border-2 p-4 '>
      <h3>Uncle</h3>
      <section className='flex gap-5'>
      <Cousin name= {'Mithun'} gift={gift} ></Cousin>
      <Cousin name= {'Sabbir'}></Cousin>
      </section>
    </div>
  )
}

Uncle.propTypes = {

}

export default Uncle

