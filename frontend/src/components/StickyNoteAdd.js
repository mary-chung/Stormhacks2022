import { Card, CardContent, CardActions } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StickyNoteAdd() {
    
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

    async function handleSubmit(e){
        e.preventDefault();
        //console.log(thought, action, note);
        var url = 'http://localhost:5000/newcard/user_ID='
        url = url + "0"


        var card = {
            "card_ID": thought,
            "card_title": thought,
            "strategies": [action]
        }
        console.log(card)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}, 
            body: JSON.stringify(card)
        }

        await fetch(url, requestOptions)
        .then(res => {
            return res.json();
        })
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
                    <Typography sx={{color: '#746867'}} variant="h5" component="h2">What's on your mind?</Typography>
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
                <Button type="submit" variant="contained">Add</Button>
            </CardActions>
            </Box>
        </Card>
    )
}

export default StickyNoteAdd
