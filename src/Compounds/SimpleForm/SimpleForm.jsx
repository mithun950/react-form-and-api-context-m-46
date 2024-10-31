
import PropTypes from 'prop-types'

function SimpleForm() {


const handleForm = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.Phone.value);
    
    
}




  return (
    <div>
      <form onSubmit={handleForm}>
        <input className='border-2 bg-gray-400' type="text" name='name' />

        <br />
        <input className='border-2 bg-gray-400'  type="email" name='email' />
        <br />
        <input className='border-2 bg-gray-400'  type="text" name="Phone"/>
        <br />
        <input className='bg-green-300 mt-2 px-4 py-2 rounded-xl font-bold' type="submit" />
      </form>
    </div>
  )
}

SimpleForm.propTypes = {

}

export default SimpleForm

