/* Form for creating a session */
import { useState } from "react";

function AddSession({onClose}){

    const [values, setValues] = useState({
        subject: '',
        date:'',
        startTime:'',
        description:'',
        status:''
    })

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:[e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    return(
        <div className="formContainer">
            <button type="button" onClick={onClose} className="closeFormBtn">X</button>
            <h3>Add a session!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="subject">Subject</label>
                <input type="text" placeholder="Learn React" name="subject"
                onChange={(e) => handleChanges(e)} required/>

                <label htmlFor="date">Date</label>
                <input type="date" name="date" value={FormData.date} onChange={(e) => handleChanges(e)} required/>

                <label htmlFor="startTime">Time</label>
                <input type="time" name="startTime"  value={FormData.startTime} onChange={(e) => handleChanges(e)} required/>

                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" placeholder="Practise React hooks"
                onChange={(e) => handleChanges(e)}></textarea>

                <label htmlFor="status">Status</label>
                <select name="status" id="status">
                    <option value="Upcoming" onChange={(e) => handleChanges(e)}>Upcoming</option>
                    <option value="In-progress" onChange={(e) => handleChanges(e)}>In-progress</option>
                    <option value="Done" onChange={(e) => handleChanges(e)}>Done</option>
                </select>

                <button className="submitSessionBtn" type="submit">Add Session</button>
            </form>
        </div>
        
    );
}

export default AddSession