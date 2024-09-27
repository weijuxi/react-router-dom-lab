// src/App.jsx
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';

const mailboxExample = [
  {
    _id: 1,
    boxSize: 'Small',
    boxholder: 'Alex',
  },
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(mailboxExample);

  const addMailbox = (newMailbox) => {
    console.log(newMailbox, '-----------------------------------newMailbox');
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxs" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} />
      </Routes>
    </>
  );
};

export default App;
