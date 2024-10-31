
import PropTypes from 'prop-types'
import { useContext } from 'react'
import {AssetsContext} from "Granpa/Grandpa";

function Sister(props) {

    const gift = useContext(AssetsContext)
  return (
    <div className='border-2 p-3'>
      <h3>Sister</h3>
      <h2>Context diye gift dilam: {gift}</h2>
    </div>
  )
}

Sister.propTypes = {

}

export default Sister

