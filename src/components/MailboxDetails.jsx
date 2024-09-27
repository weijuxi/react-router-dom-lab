import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );
    
    return (
        <div>
        <h2>Mailbox {selectedBox._id}</h2>
        <p>Box Size: {selectedBox.boxSize}</p>
        <p>Boxholder: {selectedBox.boxholder}</p>
        </div>
    );
};

export default MailboxDetails;