import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const AlertPage = ({ open, onClose, severity, message}) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={15000}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
        >
            <Alert severity={severity} onClose={onClose}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default AlertPage;