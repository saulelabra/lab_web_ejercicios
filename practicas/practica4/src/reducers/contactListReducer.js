//Saúl Enrique Labra Cruz A01020725
import Contact from '../Contacts';
import Data from '../Data';

const contactList = [
    new Contact(0 ,'Rodrigo', 'Garcia', '1111111111', 'RodAddress'),
    new Contact(1, 'Saul', 'Labra', '5555555555', 'SaulAddress'), 
    new Contact(2, 'Emilio', 'Hernandez', '222222222', 'HernandezAddress')
];

var data = new Data(-1, contactList);

function reducer(state = data, {type, payload}) {
    switch(type) {
        case 'getContact':
            console.log('entró a getContact ' + payload);
            return state;

        case 'deleteContact':
            console.log('entró a deleteContact ' + payload);
            console.log('Antes de delete: '+state.contactList);
            state.contactList = state.contactList.filter(item => item.id !== payload);
            console.log('Despues de delete: '+state.contactList);
            return state;

        case 'addContact':
            console.log("Add Contact: "+JSON.stringify(payload));
            state.contactList.push(payload);
            return state;

        case 'updateContact':
            console.log("updateContact: "+JSON.stringify(payload));
            for(var i=0;i<state.contactList.length;i++) {
                if(state.contactList[i].id == payload.id) {
                    state.contactList[i].name = payload.name;
                    state.contactList[i].surname = payload.surname;
                    state.contactList[i].phone = payload.phone;
                    state.contactList[i].address = payload.address;
                }
            }
            return state;

        case 'setCurrentContact':
            console.log('entró a setCurrentContact ' + payload);
            state.currContact = payload;
            return state;

        case 'updateContact':
            console.log('entró a updateContact');

            

            state.contactList.push(new Contact());

        default:
            console.log('entró al default');
            return state;
    }
}

export default reducer;