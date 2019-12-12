//Saúl Enrique Labra Cruz A01020725
import React from 'react'
import TextField from '@material-ui/core/TextField';
import getContact from './actions/getContact';
import { connect } from 'react-redux';

class AddressDetailAdd extends React.Component {
    
    render() {
        return(
            <div width={'100%'}>
                <TextField
                    width={'100%'}
                    padding={'0'}
                    id="Address"
                    label="Address"
                    placeholder={'e.g. Carlos Lazo 100'}
                    value={this.props.value}
                />
            </div>
        );
    }
}

export default AddressDetailAdd;