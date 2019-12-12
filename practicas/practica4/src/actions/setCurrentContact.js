//Saúl Enrique Labra Cruz A01020725
const setCurrentContact = id => {
    return {
        type: 'setCurrentContact',
        payload: id
    };
};

export default setCurrentContact;