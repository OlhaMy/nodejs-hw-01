import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactList = await readContacts();
  const newContact = Array(number)
    .fill(0)
    .map(() => createFakeContact());
  await writeContacts([...contactList, ...newContact]);
};

generateContacts(5);
