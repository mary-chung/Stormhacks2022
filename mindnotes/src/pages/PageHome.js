import { Grid } from '@mui/material';
import StickyNote from '../components/StickyNote';

function PageHome() {
    return (
        <div>
            <h2>Welcome to mindnotes</h2>
            <p>Click the add button to add your worry.</p>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <StickyNote />
            </Grid>
            <Grid item xs={3}>
                <StickyNote />
            </Grid>
            <Grid item xs={3}>
                <StickyNote />
            </Grid>
            <Grid item xs={3}>
                <StickyNote />
            </Grid>
            <Grid item xs={3}>
                <StickyNote />
            </Grid>
            <Grid item xs={3}>
                <StickyNote />
            </Grid>
            <Grid item xs={3}>
                <StickyNote />
            </Grid>
            <Grid item xs={3}>
                <StickyNote />
            </Grid>
            <Grid item xs={3}>
                <StickyNote />
            </Grid>
            <Grid item xs={3}>
                <StickyNote />
            </Grid>
            <Grid item xs={3}>
                <StickyNote />
            </Grid>
            <Grid item xs={3}>
                <StickyNote />
            </Grid>
        </Grid>
        </div>
    )
}

export default PageHome
