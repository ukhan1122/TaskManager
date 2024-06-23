import React, { useState } from "react";
import { Checkbox, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import './TaskItem.css';

const TaskItem = ({ onDelete, task, onToggle, updateTask }) => {
    const [open, setOpen] = useState(false);
    const [editTask, setEditTask] = useState({ ...task });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInput = (e) => {
        setEditTask({ ...editTask, title: e.target.value });
    };

    const handleSave = () => {
        updateTask(editTask);
        handleClose();
    };

    return (
        <div className="TaskItem">
            <Checkbox
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
            <Button variant="outlined" onClick={handleOpen}>Edit</Button>
            <Button variant="contained" color="secondary" onClick={() => onDelete(task.id)}>Delete</Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Task</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Task Title"
                        type="text"
                        fullWidth
                        value={editTask.title}
                        onChange={handleInput}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default TaskItem;
