import { Card, CardContent, CardActions } from '@mui/material';
// import { Typography } from '@mui/material';
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/material';
// import AddButton from '../components/AddButton';
import { useState } from 'react';

function StickyNoteAdd() {

    const actionItem = <TextField id="fullWidth" label="Action" variant="standard" fullWidth margin="normal" />;

    const [actionList, setActionList]= useState([]);

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

    return (
        <Card sx={{ minWidth: 500 }} variant="outlined">
            <Box
              component="form"
            /* Need to send data to backend on form submit */
              onSubmit={addItemToList}
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
                    <h2>What's on your mind?</h2>
                    <TextField id="fullWidth" label="Thought" variant="standard" fullWidth margin="normal"/>
                    <TextField id="fullWidth" label="Action" variant="standard" fullWidth margin="normal" />
                    {outputActionList(actionList)}
                    <TextField id="fullWidth" label="Notes" multiline variant="standard" fullWidth margin="normal" />
            </CardContent>
            <CardActions>
                <Button variant="outlined"
                    onClick={addItemToList}
                >New Action</Button>
                {/* <input type="submit" value="Add"> */}
                <Button type="submit" variant="contained">Add</Button>
                {/* </input> */}
            </CardActions>
            </Box>
        </Card>
    )
}

export default StickyNoteAdd
