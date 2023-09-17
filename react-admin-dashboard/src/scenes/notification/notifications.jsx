import React, {useState} from 'react';

const MyForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [useApi1, setUseApi1] = useState(false);
    const inputStyle = {
        width: '75%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        // backgroundColor: 'grey',  // Background color set to grey
        // color: 'white',
        marginLeft: '20px',
    };
    const inStyle = {
        // width: '100%',
        padding: '10px',
        // marginBottom: '10px',
        marginTop: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        // backgroundColor: 'grey',  // Background color set to grey
        // color: 'white',
        marginLeft: '20px',
    };
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };
    const handleCheckboxChange = (e) => {
        setUseApi1(e.target.checked);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Depending on the checkbox value, choose the API endpoint
        const apiEndpoint = useApi1 ? 'https://4ded-49-248-167-18.ngrok-free.app/api/admin/send-notifications-volunteers' : 'https://4ded-49-248-167-18.ngrok-free.app/api/admin/send-notifications';
        // Make the API call using fetch or axios
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                body,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('API response:', data);
                // Handle the API response
            })
            .catch((error) => {
                console.error('Error making API call:', error);
                // Handle errors
            });
    };
    return (
        <div>
            <h2 style={{marginLeft: '20px'}}>Notifications</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <b><p style={{marginLeft: '20px'}}>Title:</p></b>
                    <input type="text" value={title} onChange={handleTitleChange} style={inputStyle}/>
                </div>
                <div>
                    <b><p style={{marginLeft: '20px'}}>Body:</p></b>
                    <textarea value={body} onChange={handleBodyChange} style={inputStyle}/>
                </div>
                <div>
                    <label style={{marginLeft: '20px'}}>
                        Is Volunteer?
                        <input type="checkbox" checked={useApi1} onChange={handleCheckboxChange} style={inStyle}/>
                    </label>
                </div>
                <button type="submit" style={inStyle}>Submit</button>
            </form>
        </div>
    );
};
export default MyForm;