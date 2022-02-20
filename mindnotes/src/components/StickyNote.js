import { Card } from '@mui/material';
import { CardContent, CardActionArea } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function StickyNote() {
    return (
        <Card>
            <CardActionArea component={Link} to={'/note'}>
                <CardContent>
                    <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>Nervous for my project presentation on Tuesday</Typography>
                    <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Write some speaker notes</Typography>
                    <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Practice in front of a friend</Typography>
                    <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Go for a quick walk before presenting</Typography>
                    <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> Remember to go to the seminar room earlier to set up!</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default StickyNote
