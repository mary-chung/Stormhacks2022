import StickyNoteEdit from '../components/StickyNoteEdit';
import { Grid } from '@mui/material';

function PageEdit() {
    return (
        <main>
            <Grid className="edit-page-grid" container spacing={3}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <StickyNoteEdit />
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
        </main>
    )
}

export default PageEdit