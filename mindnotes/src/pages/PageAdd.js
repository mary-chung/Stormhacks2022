import StickyNoteAdd from '../components/StickyNoteAdd';
import { Grid } from '@mui/material';

function PageAdd() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <StickyNoteAdd />
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>
    )
}

export default PageAdd
