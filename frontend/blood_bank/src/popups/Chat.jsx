import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { axiosGet, axiosPost } from '../AxiosOperations';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function Chat(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    const [profile, setProfile] = useState({});

    const [notifications, setNotifications] = useState([]);
    const [errors, setErrors] = useState({});

    let [formData, setFormData] = useState({
        reciver_id: props.id,
        message:'',
        subject:'',
        sendername:''
        });

    const validateFormData = () => {

        const errors = {};

        if (!formData.message.trim()) {
            errors.fullname = "Please enter message";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleChnage = (e) => {

        const { value, name } = e.target;
        //console.log(value, name);
        setFormData({ ...formData, [name]: value });


    }
    const sendMessage = () => {


        axiosPost('donor/notification', JSON.stringify(formData));
        alert("Message Send Succsessfully");

        handleClose();
    }

    return (
         <React.Fragment >
            <Button variant="outlined" className='w-full' onClick={handleClickOpen}>
                Chat
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >

            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    <div className='homepara font-bold'>Chat With - {props.name}</div>
                </DialogTitle>
                <hr className='border-2 m-[15px]' />
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color:'red',
                    }}
                >
                    <CloseIcon />
                </IconButton>
        
    );  
}
