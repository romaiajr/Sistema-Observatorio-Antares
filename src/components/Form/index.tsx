import React, { ChangeEvent, FunctionComponent, EventHandler } from 'react';
import Navbar, { FormProps } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import './styles.css';
import { Size } from '@material-ui/core';

interface formProps {
    id:string
    Label:string 
    Size: Size
    Variant: any 
    value: string 
    onChange: (event: any) => any
}

const Form: React.FunctionComponent<formProps> = (props) => {
    return (
        <TextField
        id = {props.id} 
        label = {props.Label}
        variant = {props.Variant}
        size = {props.Size}
        value = {props.value}
        onChange = {props.onChange}
      />
    );
}

export default Form;