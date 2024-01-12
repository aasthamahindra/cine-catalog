import React from 'react';

const SignUp = () => {
    return ( 
        <div className='addMovie' id='addmovie'>
            <div className='form-card'>
                <form>
                    <h1> Help us add more movies !</h1>
                    <input type='text' placeholder='Name' required/>
                    <br/>
                    <input type='text' placeholder='Genre' required/>
                    <br/>
                    <input type='text' placeholder='Year of Release'/>
                    <br/>
                    <input type='text' placeholder='Image URI (e.g., ending with .jpg or .png)' required/>
                    <br/>
                    <button style={{ marginBottom: '10px'}}> Add Movie </button>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;