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
        navigate('/mailboxs');
    }

    

    return (
        <div>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxSize">Box Size:</label>
                    <input
                        type="text"
                        value={boxSize}
                        onChange={(e) => setBoxSize(e.target.value)}
                    />
                <label htmlFor="boxholder"> Boxholder:</label>
                    <input
                        type="text"
                        value={boxholder}
                        onChange={(e) => setBoxholder(e.target.value)}
                    />
                <button type="submit">Add Mailbox</button>
            </form>
        </div>
    );
}

export default MailboxForm;