import { Grid } from '@mui/material';
import StickyNote from '../components/StickyNote';
import AddButton from '../components/AddButton';
import Instructions from '../components/Instructions';
import StickyNoteSample from '../components/StickyNoteSample';
import StickyNoteHomeAdd from '../components/StickyNoteHomeAdd';
import StickyNoteAll from '../components/StickyNoteAll';

function PageHome() {
    return (
        <main>
            {/* <AddButton /> */}
        {/* <Grid container spacing={3} className="home-page-grid">
            <Instructions />
            <StickyNoteSample />
            <StickyNoteHomeAdd />
        </Grid> */}
        {/* <Grid container spacing={3} className="home-page-grid"> */}
            {/* <Grid item xs={3}>
                <StickyNote />
            </Grid> */}
            {/* <StickyNoteHomeAdd /> */}
        {/* </Grid> */}
        <StickyNoteAll />
        </main>
    )
}

export default PageHome
