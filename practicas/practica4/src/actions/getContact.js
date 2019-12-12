//Saúl Enrique Labra Cruz A01020725
const getContact = id => {
    return {
        type: 'getContact',
        payload: id
    };
};

export default getContact;