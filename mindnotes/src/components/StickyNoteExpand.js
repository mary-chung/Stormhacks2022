import { Card, CardContent, CardActions } from '@mui/material';
import { Button, Typography } from '@mui/material';
import RadioGroupRating from '../components/RadioGroupRating';
import { Link } from 'react-router-dom'

function StickyNoteExpand() {
    return (
        <Card className="sticky-note-expanded" variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">Thought Lorem ipsum dolor sit amet</Typography>
                <div className="action-group">  
                    <Typography variant="h6" component="h3">Action 1 Lorem ipsum dolor sit amet</Typography>
                    <RadioGroupRating />
                </div>
                <div className="action-group">
                    <Typography variant="h6" component="h3">Action 2 Lorem ipsum dolor sit amet</Typography>
                    <RadioGroupRating />
                </div>
                <div className="action-group">
                    <Typography variant="h6" component="h3">Action 3 Lorem ipsum dolor sit amet</Typography>
                    <RadioGroupRating />
                </div>
                <Typography paragraph>Notes go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum fermentum dolor, et aliquam nibh eleifend ac.</Typography>
                <CardActions>
                    <Link to={'/'}><Button component="div" variant="contained">Okay</Button></Link>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default StickyNoteExpand