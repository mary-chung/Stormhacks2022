import { Card, CardContent, CardActions } from '@mui/material';
import { Box, IconButton, Button, Typography } from '@mui/material';
import RadioGroupRating from '../components/RadioGroupRating';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function StickyNoteExpand() {

    const navigate = useNavigate();

    function handleBackClick() {
        navigate('/')
    }

    function handleEditClick() {
        navigate('/add')
    }

    function handleDeleteClick() {
        navigate('/')
    }

    return (
        <Card className="sticky-note-expanded" variant="outlined">
            <Box sx={{padding: '1rem', backgroundColor: 'rgba(190, 200, 218, 0.5)'}}>
                <CardContent>
                    <Typography variant="h5" component="h2">Nervous for my project presentation on Tuesday</Typography>
                    <div className="action-group">  
                        <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6', marginBottom: '0.25rem'}}><span className="action-label">Action</span> Write some speaker notes</Typography>
                        <RadioGroupRating />
                    </div>
                    <div className="action-group">
                        <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6', marginBottom: '0.25rem'}}><span className="action-label">Action</span> Practice in front of a friend</Typography>
                        <RadioGroupRating />
                    </div>
                    <div className="action-group">
                        <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6', marginBottom: '0.25rem'}}><span className="action-label">Action</span> Go for a quick walk before presenting</Typography>
                        <RadioGroupRating />
                    </div>
                    <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> Remember to go to the seminar room earlier to set up!</Typography>
                    <CardActions className="sticky-options" sx={{paddingLeft: '0'}}>
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
                            <div>
                            <Button onClick={handleEditClick}
                                    component="div" 
                                    variant="contained"
                                    >
                            Edit
                            </Button>
                            <IconButton aria-label="delete"
                                        onClick={handleDeleteClick}>
                                <DeleteOutlineOutlinedIcon/>
                            </IconButton>
                            </div>
                    </CardActions>
                </CardContent>
            </Box>
        </Card>
    )
}

export default StickyNoteExpand