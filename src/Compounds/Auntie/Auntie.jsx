
import PropTypes from 'prop-types'
import Cousin from '../Cousin/Cousin'

function Auntie(props) {
  return (
    <div className='border-2 p-2'>
      <h3>auntie</h3>
      <section className='flex gap-5'>
       <Cousin name={'Rishad'}></Cousin>
       <Cousin name={'Shuborna'}></Cousin>
      </section>
    </div>
  )
}

Auntie.propTypes = {

}

export default Auntie

