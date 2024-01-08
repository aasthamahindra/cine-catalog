import React from 'react';
import { MessageSquareDiff } from 'lucide-react';

const AddMovie = () => {

    return ( 
        <div className='addMovie' id='addmovie'>
            <div className='form-card'>
                <MessageSquareDiff style={{ marginTop: '10px'}} color='#ffffff' size={48}/>
                <form>
                    <h1> Help us add more movies !</h1>
                    <input type='text' placeholder='Name' required/>
                    <br/>
                    <input type='text' placeholder='Genre' required/>
                    <br/>
                    <input type='text' placeholder='Year of Release'/>
                    <br/>
                    <button style={{ marginBottom: '10px'}}> Add Movie </button>
                </form>
            </div>
        </div>
     );
}
 
export default AddMovie;