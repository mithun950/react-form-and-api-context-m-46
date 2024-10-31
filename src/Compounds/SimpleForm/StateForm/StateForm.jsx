
import PropTypes from 'prop-types'
import { useState } from 'react';

function StateForm() {
   
    const [email,setEmail] = useState(null)

    const [name,setName] = useState(null)

    const [password,setPassword] = useState(null)

    const [error,setError] = useState(null)

    const handleSubmitState = e =>{
         e.preventDefault();
         if(password.length<6){
            setError('Password must be 6 character or longer')
         }
         else{
            setError(' ');
         }
    }

    const handleEmailChange = e =>{
       console.log(e.target.value);
       setEmail(e.target.value)
       
    }
    const handleNameChange = e =>{
       console.log(e.target.value);
       setName(e.target.value)
       
    }

    const handlePassChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value)
        
    }





  return (
    <div>
         <br />
         <br />
         <br />
        <h2  className=' mt-15 '>State diye form </h2>
      <form onSubmit={handleSubmitState}>

        <input 
        onChange={handleNameChange}
         className='border-2 bg-gray-400' type="text" name='name' />

        <br />
        <input 
         onChange={handleEmailChange}
         className='border-2 bg-gray-400'  type="email" name='email' />
        <br />

        <input 
        onChange={handlePassChange}
         className='border-2 bg-gray-400'  type="password" name="password"  required/> 
        <br />

        {/* error dekhanor jonno eta lekhlam */}
        {
            error && <p className='text-xs text-red-600'>{error}</p>
        }

        <input className='bg-green-300 mt-2 px-4 py-2 rounded-xl font-bold' type="submit" />
      </form>
    </div>
  )
}

StateForm.propTypes = {

}

export default StateForm

