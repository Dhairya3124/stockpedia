import React from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
const Form = () => {
  const [isubmitted, setIsubmitted] = React.useState(false)

  function submitForm() {
    setIsubmitted(true);
  }
    return (
        <div>
          {!isubmitted ? <FormSignup submitForm = {submitForm}/> : <FormSuccess />} 
        </div>
    )
}

export default Form