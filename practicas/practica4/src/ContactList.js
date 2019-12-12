import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TitleBar from './TitleBar';
import { connect } from 'react-redux';
import getContact from './actions/getContact';
import deleteContact from './actions/deleteContact';
import setCurrentContact from './actions/setCurrentContact';
//Saúl Enrique Labra Cruz A01020725
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  contactList: {
      margin: '5% 10% 0% 10%',
      width: '80%'
  },
}));



class ContactList extends React.Component {
  constructor(props){
    super(props);
  }
  
  getContactDetails(id) {
    console.log(this.props.getContact(id));
  }

  deleteContact(id) {
    this.props.deleteContact(id);
    this.setState({ state: this.state });
  }
  setCurrentContact(id) {
    this.props.setCurrentContact(id);
  }

  test = (event) =>
  {
    console.log("clicked");
  }
  
  render() {
    var contactListReducer = this.props;
    var Data = contactListReducer.state;
    var contactList = Data.contactList;

    return (
      <div className="App">
        <TitleBar/>
        <Table /*className={classes.contactList}*/>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contactList.map(contactList => (
              <TableRow key={contactList.name}>
                <TableCell>{contactList.id}</TableCell>
                <TableCell component="th" scope="row">{contactList.name}</TableCell>
                <TableCell>{contactList.surname}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => this.deleteContact(contactList.id)}>Delete</Button>
                  <Button component={ Link } to="/contactDetails" variant="contained" onClick={() => this.setCurrentContact(contactList.id)}
                  >Details</Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell/>
              <TableCell/>
              <TableCell/>
              <TableCell>
                <Button component={ Link } to="/addContact" variant="contained">ADD</Button>
              </TableCell>
            </TableRow>
          </TableBody>
          </Table>
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
  setCurrentContact,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
