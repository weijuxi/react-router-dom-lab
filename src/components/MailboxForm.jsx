import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const MailboxForm = (props) => {
    const [boxSize, setBoxSize] = useState('');
    const [boxholder, setBoxholder] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addMailbox({ boxSize, boxholder });
        setBoxSize('');
        setBoxholder('');
        navigate('/mailbox');
    }

    

    return (
        <div>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Box Size:
                    <input
                        type="text"
                        value={boxSize}
                        onChange={(e) => setBoxSize(e.target.value)}
                    />
                </label>
                <label>
                    Boxholder:
                    <input
                        type="text"
                        value={boxholder}
                        onChange={(e) => setBoxholder(e.target.value)}
                    />
                </label>
                <button type="submit">Add Mailbox</button>
            </form>
        </div>
    );
}

export default MailboxForm;