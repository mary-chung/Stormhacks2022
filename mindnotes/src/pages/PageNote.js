import StickyNoteExpand from '../components/StickyNoteExpand';
import { Grid } from '@mui/material';

function PageNote() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <StickyNoteExpand />
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>
    )
}

export default PageNote