import { Card, CardContent, CardActions } from '@mui/material';
import { Box, Button, Typography } from '@mui/material';
import RadioGroupRating from '../components/RadioGroupRating';
import { useNavigate } from 'react-router-dom'

function StickyNoteExpand() {

    const navigate = useNavigate();

    function handleBackClick() {
        navigate('/')
    }

    return (
        <Card className="sticky-note-expanded" variant="outlined">
            <Box sx={{padding: '1rem', backgroundColor: 'rgba(190, 200, 218, 0.5)'}}>
                <CardContent>
                    <Typography variant="h5" component="h2">Thought Lorem ipsum dolor sit amet</Typography>
                    <div className="action-group">  
                        <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6', marginBottom: '0.25rem'}}><span className="action-label">Action</span> Lorem ipsum dolor sit amet</Typography>
                        <RadioGroupRating />
                    </div>
                    <div className="action-group">
                        <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6', marginBottom: '0.25rem'}}><span className="action-label">Action</span> Lorem ipsum dolor sit amet</Typography>
                        <RadioGroupRating />
                    </div>
                    <div className="action-group">
                        <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6', marginBottom: '0.25rem'}}><span className="action-label">Action</span> Lorem ipsum dolor sit amet</Typography>
                        <RadioGroupRating />
                    </div>
                    <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> Notes go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum fermentum dolor, et aliquam nibh eleifend ac.</Typography>
                    <CardActions sx={{paddingLeft: '0'}}>
                            <Button onClick={handleBackClick}
                                    component="div" 
                                    variant="outlined" 
                                    sx={{
                                        backgroundColor: 'white', 
                                        '&:hover': {
                                        backgroundColor: 'white'},
                                        }} >
                            Back
                            </Button>
                    </CardActions>
                </CardContent>
            </Box>
        </Card>
    )
}

export default StickyNoteExpand