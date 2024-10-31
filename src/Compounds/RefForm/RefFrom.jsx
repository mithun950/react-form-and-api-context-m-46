
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

function RefFrom() {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const [error,setError] = useState(null)

    // const [password, setPassword] = useState


    useEffect( () =>{
        nameRef.current.focus();
    },[])

    const handleRefForm = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)

        if(passwordRef.length <6){
            setError('plese password will be 6 character or longer')
        }
        else{
            setError(' ');
        }

        // const handlePassChange = e => {
        //     console.log(e.target.value);
        //     setPassword(e.target.value)
            
        // }
    }
  return (
    <div>
       <br />
       <br />
       <br />
       

       <h2>useRef state diye form </h2>
      
      
      <form onSubmit={handleRefForm}>
        <input ref={nameRef} className='border-2 bg-gray-400' type="text" name='name' />

        <br />
        <input  ref={emailRef} className='border-2 bg-gray-400'  type="email" name='email' />
        <br />
        <input  ref={passwordRef} className='border-2 bg-gray-400'  type="password" name="password" required/>
        {
            error && <p className='text-red-600'>{error}</p>
        }
        <br />
        <input className='bg-green-300 mt-2 px-4 py-2 rounded-xl font-bold' type="submit" />
      </form>
    </div>
  )
}

RefFrom.propTypes = {

}

export default RefFrom

