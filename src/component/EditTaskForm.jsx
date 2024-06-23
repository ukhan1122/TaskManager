import React from "react";
import { TextField, Button, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const EditTaskForm = ({ editTask, onInput, onSave }) => {
    return (
        <div>
            <DialogTitle sx={{ backgroundColor: 'red', fontSize: '1.5em', fontWeight: 'bold' }}>
                Edit Task
            </DialogTitle>
            <DialogContent sx={{ padding: '20px' }}>
                <TextField
                    margin="dense"
                    label="Task Title"
                    type="text"
                    fullWidth
                    value={editTask.title}
                    onChange={onInput}
                    sx={{ margin: '10px 0' }}
                />
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 20px' }}>
                <Button onClick={onSave} color="primary" sx={{ marginLeft: '10px' }}>
                    Save
                </Button>
            </DialogActions>
        </div>
    );
};

export default EditTaskForm;
