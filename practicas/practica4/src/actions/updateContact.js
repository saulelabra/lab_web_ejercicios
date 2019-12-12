//Saúl Enrique Labra Cruz A01020725
const updateContact = id => {
    return {
        type: 'updateContact',
        payload: id
    };
};

export default updateContact;