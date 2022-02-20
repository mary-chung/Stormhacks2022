import StickyNote from '../components/StickyNote';
import StickyNoteHomeAdd from '../components/StickyNoteHomeAdd';
import { Grid } from '@mui/material';

function Mindboard({notes}) {
    return (
        <div>
            <Grid container spacing={3} className="home-page-grid">
                {notes.map(note => 
                    <Grid item xs={3}>
                        <StickyNote key={note.card_ID} note={note}/>
                    </Grid>)}
                <StickyNoteHomeAdd />
            </Grid>
        </div>
    )
}

export default Mindboard
