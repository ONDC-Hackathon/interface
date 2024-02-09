import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Button, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'

const DeletePopup = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                '& .MuiDialog-container': {
                    alignItems: 'flex-start',
                },
                '& .MuiPaper-root': {
                    margin: '16px',
                    width: 'fit-content',
                },
            }}
        >
            <DialogTitle
                id="alert-dialog-title"
                sx={{ m: 0, p: 2, justifyContent: 'flex-end', display: 'flex', alignItems: 'center' }}
            >
                <IconButton onClick={onClose} size="large">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <DeleteIcon color="warning" sx={{ width: 100, height: 100 }} />
                    Delete product
                </Typography>
                <DialogContentText id="alert-dialog-description" sx={{ mb: 2 }}>
                    Are you sure you want to delete this product?
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ pb: 3, justifyContent: 'center' }}>
                <Button onClick={onClose} variant="outlined" sx={{ mr: 2, borderRadius: 2 }} autoFocus>
                    Cancel
                </Button>
                <Button onClick={onConfirm} variant="contained" color="warning" sx={{ borderRadius: 2 }}>
                    Yes, delete it
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeletePopup
