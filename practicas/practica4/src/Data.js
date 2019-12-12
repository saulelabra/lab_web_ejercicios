//Saúl Enrique Labra Cruz A01020725
import Contact from './Contacts';

class Data {
    contactList = [];
    currContact = null;
    constructor(currContact, contactList) {
        this.currContact = currContact;
        this.contactList = contactList;
    }
}

export default Data;