//Saúl Enrique Labra Cruz A01020725s
import React from 'react'
import TextField from '@material-ui/core/TextField';
import getContact from './actions/getContact';
import { connect } from 'react-redux';

class AddressDetail extends React.Component {
    
    render() {
        this.props.getContact(-1);
        var contactListReducer = this.props;
        var Data = contactListReducer.state;
        var contactList = Data.contactList;
        console.log("CurrentContact: "+Data.currContact);

        return(
            <div width={'100%'}>
                <TextField
                    width={'100%'}
                    padding={'0'}
                    id="Address"
                    label="Address"
                    placeholder={'e.g. Carlos Lazo 100'}
                    defaultValue={contactList[Data.currContact].address}
                    value={this.props.value}
                />
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
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddressDetail);