import { Card, CardContent, CardActions } from '@mui/material';
import { Box, IconButton, Button, Typography } from '@mui/material';
import RadioGroupRating from '../components/RadioGroupRating';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function StickyNoteExpand({note}) {

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
                    {note.card_title !== "" && 
                        <Typography variant="h5" component="h2">{note.card_title}</Typography>}
                    {note.strategies[0].strategy !== "" && 
                        <div className="action-group">  
                            <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6', marginBottom: '0.25rem'}}><span className="action-label">Action</span> {note.strategies[0].strategy}</Typography>
                            <RadioGroupRating />
                        </div>}
                    {note.strategies[1].strategy !== "" && 
                        <div className="action-group">
                            <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6', marginBottom: '0.25rem'}}><span className="action-label">Action</span> {note.strategies[1].strategy}</Typography>
                            <RadioGroupRating />
                        </div>}
                    {note.strategies[2].strategy !== "" && 
                        <div className="action-group">
                            <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6', marginBottom: '0.25rem'}}><span className="action-label">Action</span> {note.strategies[2].strategy}</Typography>
                            <RadioGroupRating />
                        </div>}
                    {note.note !== "" && 
                        <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> {note.note}</Typography>}
 
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