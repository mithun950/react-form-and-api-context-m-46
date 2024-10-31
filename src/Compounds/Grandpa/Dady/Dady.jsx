
import PropTypes from 'prop-types'
import Myself from '../../Myself/Myself'
import Brother from '../../Brother/Brother'
import Sister from '../../Sister/Sister'

function Dady({assets}) {
  return (
    <div className='border-2 p-4'>
      <h3>Dady</h3>
      <section className='flex gap-3'>
        <Myself assets={assets}></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  )
}

Dady.propTypes = {

}

export default Dady

