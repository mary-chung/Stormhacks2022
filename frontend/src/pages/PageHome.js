import { Grid } from '@mui/material';
import Instructions from '../components/Instructions';
import StickyNoteSample from '../components/StickyNoteSample';
import StickyNoteHomeAdd from '../components/StickyNoteHomeAdd';
import Mindboard from '../components/Mindboard';
import { useState, useEffect } from 'react';


function PageHome() {

    const [noteData, setNoteData] = useState(null);

    useEffect(() => {
        const fetchNote = async () => {
        const res = await fetch(``);
        let noteDataFromAPI = await res.json();

        noteDataFromAPI = noteDataFromAPI.results.splice(0, 15);
        console.log(noteDataFromAPI);
        setNoteData(noteDataFromAPI);
        }

        fetchNote();
    }, []);

    return (
        <main>
        {noteData !== null &&
                <section>                 
                    {noteData.length > 0 ?
                    <Mindboard notes={noteData} /> : 
                    <Grid container spacing={3} className="home-page-grid">
                        <Instructions />
                        <StickyNoteSample />
                        <StickyNoteHomeAdd />
                     </Grid>}
                </section> }
        </main>
    )
}

export default PageHome
