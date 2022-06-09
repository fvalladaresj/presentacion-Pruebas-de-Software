import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

interface contact {
    name: string,
    lastname1: string,
    lastname2: string,
    email: string,
    phone: string,
}

const ContactsInfo = [{
    name: "nombre",
    lastname1: "apellido 1",
    lastname2: "apellido 2",
    email: "email@gmail.com",
    phone: "123456789"
}];

const ContactList = () => {
    return (
    <List>
        {ContactsInfo.map(cc => (
            <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                {/* <DeleteIcon /> */}
              </IconButton>
            }
          >
            <ListItemText
              primary={cc.name + " " + cc.lastname1 + " " + cc.lastname2}
              secondary={cc.email + " | " + cc.phone}
            />
          </ListItem>
        ))}
    </List>
    );
}

export default ContactList;