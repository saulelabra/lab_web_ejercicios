//Saúl Enrique Labra Cruz A01020725
import React from 'react'
import Contact from './Contacts'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TitleBar from './TitleBar';
import AddressDetail from './AddressDetail';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getContact from './actions/getContact';
import deleteContact from './actions/deleteContact';
import updateContact from './actions/updateContact';
import ContactList from './ContactList';

const detailsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    width: '40%',
    padding: '2% 5% 4% 5%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
};

const subtitleStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
};

const buttonStyle = {
    margin: '5px'
};

const displayHorizontalStyle = {
    display: 'flex',
    flexDirection: 'row'
};
  
class ContactDetails extends React.Component {

    constructor(props, classes){
        super(props);
        
        console.log("Constructor Details: "+JSON.stringify(props));
    }

    getContactDetails(id){
        console.log(this.props.getContact(id));
    }

    updateContact(id, name, surname, phone, address){
        var contact = new Contact(id, name, surname, phone, address);
        //console.log(contact);
        this.props.updateContact(contact);
        
    }

    render() {
        this.props.getContact(-1);
        var contactListReducer = this.props;
        var Data = contactListReducer.state;
        var contactList = Data.contactList;
        console.log("CurrentContact: " + Data.currContact);    

        return(
            <div>
                <TitleBar/>
                <Paper style={detailsContainerStyle}>
                    <h2 style={subtitleStyle}>Contact Information</h2>
                    <TextField
                        id="Name"
                        label="Name"
                        placeholder={'e.g. Saúl'}
                        margin="normal"
                        defaultValue={contactList[Data.currContact].name}
                    />
                    <TextField
                        id="LastName"
                        label="Last Name"
                        placeholder={'e.g. Labra'}
                        margin="normal"
                        defaultValue={contactList[Data.currContact].surname}
                    />
                    <TextField
                        id="PhoneNumber"
                        label="Phone Number"
                        placeholder={'e.g. 55123456'}
                        type="number"
                        margin="normal"
                        defaultValue={contactList[Data.currContact].phone}
                    />
                    <AddressDetail
                        id="Address"
                        margin="normal"
                    />
                    <div style={displayHorizontalStyle}>
                        <Button component={ Link } to="/" variant="contained" style={buttonStyle}>
                            BACK
                        </Button>
                        <Button component={ Link } to="/"variant="contained" color="primary" style={buttonStyle} onClick={() => this.updateContact(Data.currContact, document.getElementById('Name').value, document.getElementById('LastName').value, document.getElementById('PhoneNumber').value, document.getElementById('Address').value)}>
                            SAVE
                        </Button>
                    </div>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      state: state.contactListReducer,
    }
  }
  
  const mapDispatchToProps = {
    getContact,
    deleteContact,
    updateContact,
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);