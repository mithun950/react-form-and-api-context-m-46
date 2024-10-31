
import PropTypes from 'prop-types'
import Spacial from '../Speacial/Spacial'

function Myself({assets}) {
  return (
    <div className='border-2 p-3'>
      <h3>Myself</h3>
      <section>
        <Spacial assets={assets}></Spacial>
      </section>
    </div>
  )
}

Myself.propTypes = {

}

export default Myself

