import { Card } from '@mui/material';
import { CardContent, CardActionArea } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function StickyNote() {
    return (
        <Card>
            <CardActionArea component={Link} to={'/note'}>
                <CardContent>
                    <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>Thought Lorem ipsum dolor sit amet</Typography>
                    <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Lorem ipsum dolor sit amet</Typography>
                    <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Lorem ipsum dolor sit amet</Typography>
                    <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> Notes go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum fermentum dolor, et aliquam nibh eleifend ac.</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default StickyNote
