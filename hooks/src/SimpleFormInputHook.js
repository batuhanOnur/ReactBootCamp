import React from 'react';
import useFormState from './hooks/useFormState';

function SimpleFormInputHooks() {

    const [email,updateEmail,resetEmail] = useFormState("");

    return (
        <div>
          <h1>The value is...{email}</h1>
          <input type="text" value={email} onChange={updateEmail}/> 
          <button onClick={resetEmail}> Submit</button>
        </div>
    )
}

export default SimpleFormInputHooks