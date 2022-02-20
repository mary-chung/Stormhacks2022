import { Card } from '@mui/material';
import { CardContent, CardActionArea } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function StickyNote({note}) {

    function actionGroup() {
        for (let i=0; i < note.strategies.length; i++ ) {
            const noteStrategies = note.strategies[i];

            return (
                <div>
                    {note.strategies.map((noteStrategy, i) => 
                        <Typography key={noteStrategies} variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> {noteStrategies.strategy}</Typography>
                        )}
                </div>  
            )
        }
    }

    return (
        <Card>
            <CardActionArea component={Link} to={`/note/${note.card_ID}`}>
                <CardContent>
                    {note.card_title !== "" && 
                    <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>{note.card_title}</Typography> }
                    {actionGroup()}
                    {note.notes !== "" && 
                    <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> {note.notes}</Typography> }
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default StickyNote
