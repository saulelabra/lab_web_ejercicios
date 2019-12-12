//Saúl Enrique Labra Cruz A01020725
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
    titleBar: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#4287f5',
        color: 'white',
    },
    titleBarContent: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '10%',
    }
  }));

export default function TitleBar (){
    const classes = useStyles();

    return(
        <Box className={classes.titleBar}>
            <div className={classes.titleBarContent}>
                <h1>Contacts</h1>
            </div>
        </Box>
    );
}