
import {Link} from 'react-router-dom';

const MailboxList = (props) => {
    return (
        <div>
            <h2>Mailboxes</h2>
            <ul>
                {props.mailboxes.map((mailbox) => (
                    <li key={mailbox._id} className='mail-box'>
                        <Link to={`/mailboxes/${mailbox._id}`}>
                            MailBox {mailbox._id}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MailboxList;