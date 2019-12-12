//Saúl Enrique Labra Cruz A01020725
const deleteContact = id => {
    return {
        type: 'deleteContact',
        payload: id
    };
};

export default deleteContact;