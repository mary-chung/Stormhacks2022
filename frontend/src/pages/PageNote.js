import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StickyNoteExpand from '../components/StickyNoteExpand';
import { Grid } from '@mui/material';

function PageNote() {

    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        const getNote = async () => {
            const res = await fetch(`
            `);
            const noteDataFromAPI = await res.json();
            setNote(noteDataFromAPI);
        }

        getNote();
    }, [id])

    console.log(note);

    return (
        <main>
            {note !== null && 
                <Grid className="note-page-grid" container spacing={3}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <StickyNoteExpand note={note} />
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            }
        </main>
    )
}

export default PageNote