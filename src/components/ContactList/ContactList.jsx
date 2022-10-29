const ContactList = ({ filttredContacts, removeContact }) => {
  return (
    <ul>
      {filttredContacts.length > 0 &&
        filttredContacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              {name} : {number}
              <button
                type="button"
                onClick={() => {
                  removeContact(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
export default ContactList;
