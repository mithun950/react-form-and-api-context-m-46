
import PropTypes from 'prop-types'

function Cousin({name,gift}) {
  return (
    <div>
      <h3>Cousin</h3>
      <section className=''>
        <h2>{name}</h2>
        <p>{gift}</p>
      </section>
    </div>
  )
}

Cousin.propTypes = {

}

export default Cousin

