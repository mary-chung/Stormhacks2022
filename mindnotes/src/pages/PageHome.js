import { Grid } from '@mui/material';
import StickyNote from '../components/StickyNote';
import AddButton from '../components/AddButton';

function PageHome() {
    return (
        <main>
            {/* <h2>Welcome to mindnotes</h2>
            <p>Click the add button to add your worry.</p> */}
            <AddButton/>
        <Grid container spacing={3} className="home-page-grid">
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
        </main>
    )
}

export default PageHome
