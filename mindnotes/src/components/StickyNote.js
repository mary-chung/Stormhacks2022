import { Card } from '@mui/material';
import { CardContent, CardActionArea } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function StickyNote({note}) {
    return (
        <Card>
            <CardActionArea component={Link} to={`/note/${note.card_id}`}>
                <CardContent>
                    {note.card_title !== "" && 
                    <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>{note.card_title}</Typography> }
                    {note.strategies[0].strategy !== "" && 
                    <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> {note.strategies[0].strategy}</Typography> }
                    {note.strategies[1].strategy !== "" && 
                    <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> {note.strategies[1].strategy}</Typography> }
                    {note.strategies[2].strategy !== "" && 
                    <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> {note.strategies[2].strategy}</Typography> }
                    {note.note !== "" && 
                    <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> {note.note}</Typography> }
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default StickyNote
