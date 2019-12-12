//Saúl Enrique Labra Cruz A01020725
const addContact = id => {
    return {
        type: 'addContact',
        payload: id
    };
};

export default addContact;