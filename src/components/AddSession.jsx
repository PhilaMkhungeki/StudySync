/* Form for creating a session */
import { useState } from "react";

function AddSession({onClose, addNewSession}){

    const [values, setValues] = useState({
        subject: '',
        date:'',
        startTime:'',
        description:'',
        status:''
    })

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        addNewSession(values);
        onClose();
    }

    return(
        <>
            <div className="formContainer">
                <button type="button" onClick={onClose} className="closeFormBtn">X</button>
                <h3>Add a session!</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" placeholder="Learn React" name="subject"
                    onChange={(e) => handleChanges(e)} value={values.subject} required/>

                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" value={values.date} onChange={(e) => handleChanges(e)} required/>

                    <label htmlFor="startTime">Time</label>
                    <input type="time" name="startTime"  value={values.startTime} onChange={(e) => handleChanges(e)} required/>

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" placeholder="Practise React hooks"
                    onChange={(e) => handleChanges(e)} value={values.description}></textarea>

                    <label htmlFor="status">Status</label>
                    <select name="status" id="status" value={values.status} onChange={handleChanges}>
                        <option value="">--Select--</option>
                        <option value="Upcoming">Upcoming</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Done">Done</option>
                    </select>

                    <button className="submitSessionBtn" type="submit">Add Session</button>
                </form>
            </div>
            {console.log(values)};
        </>
        
        
    );
}

export default AddSession