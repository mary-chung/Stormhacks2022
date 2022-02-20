import { Card, CardContent, CardActions } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StickyNoteEdit() {

    
    const navigate = useNavigate();
    
    const [thought, setThought] = useState("");
    const [action, setAction] = useState("");
    const [note, setNote] = useState("");
    
    const [actionList, setActionList]= useState([]);
    
    const actionItem = <TextField id="fullWidth" label="Action" variant="standard" fullWidth margin="normal" />;

    function addItemToList(e){
        e.preventDefault();
        const item = actionItem;
        setActionList([...actionList, item]);
    }

    function outputActionList(actionList) {
        return (
            <div className="action-item">
                    {actionList.map((item, i) => <div key={i}>{item}</div>)}
            </div>
        )
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(thought, action, note);
    }

    return (
        <Card sx={{ minWidth: 500 }} variant="outlined">
            <Box
              component="form"
            /* Need to send data to backend on form submit */
              onSubmit={handleSubmit}
              action="/"
              sx={{
               // '& > :not(style)': { m: 1, width: '25ch' },
                  maxWidth: '100%',
                  padding: '1rem',
                }}
                  noValidate
                  autoComplete="off"
                  >
            <CardContent>
                    <Typography sx={{color: '#746867'}} variant="h5" component="h2">Edit your mind note</Typography>
                    <TextField  id="fullWidth" 
                                label="Thought"
                                value={thought} 
                                onInput={ e=>setThought(e.target.value)}
                                variant="standard" 
                                fullWidth 
                                margin="normal"/>
                    <TextField  id="fullWidth" 
                                label="Action"
                                value={action} 
                                onInput={ e=>setAction(e.target.value)} 
                                variant="standard" 
                                fullWidth 
                                margin="normal" />
                    {outputActionList(actionList)}
                    <TextField  id="fullWidth" 
                                label="Notes" 
                                value={note} 
                                onInput={ e=>setNote(e.target.value)}
                                multiline 
                                variant="standard" 
                                fullWidth margin="normal" />
            </CardContent>
            <CardActions className="sticky-options">
                <Button variant="outlined"
                    onClick={addItemToList}
                >New Action</Button>
                <Button type="submit" variant="contained">Save</Button>
            </CardActions>
            </Box>
        </Card>
    )
}

export default StickyNoteEdit