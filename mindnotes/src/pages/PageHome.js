import { Grid } from '@mui/material';
import StickyNote from '../components/StickyNote';
import AddButton from '../components/AddButton';
import Instructions from '../components/Instructions';
import StickyNoteSample from '../components/StickyNoteSample';

function PageHome() {
    return (
        <main>
            <AddButton />
        <Grid container spacing={3} className="home-page-grid">
            <Instructions />
            <StickyNoteSample />
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
