import { Card, CardContent, CardActions } from '@mui/material';
import { Box, IconButton, Button, Typography } from '@mui/material';
import RadioGroupRating from '../components/RadioGroupRating';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function StickyNoteExpand({note}) {

    const { id } = useParams();

    const navigate = useNavigate();

    function actionGroup() {
        for (let i=0; i < note.strategies.length; i++ ) {
            const noteStrategies = note.strategies[i];

            return (
                <div>
                    {note.strategies.map((noteStrategy, i) => 
                        <div className="action-group">  
                            <Typography key={noteStrategies} 
                                        variant="p" 
                                        component="h3" 
                                        sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6', marginBottom: '0.25rem'}}>
                                            <span className="action-label">Action</span> {noteStrategies.strategy}
                            </Typography>
                            <RadioGroupRating noteStrategy={noteStrategy} />
                        </div>
                        )}
                </div>  
            )
        }
    }

    function handleBackClick() {
        navigate('/')
    }

    function handleEditClick() {
        navigate(`/edit/${id}`)
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
                        {/* dynamically inserts the actions */}
                        {actionGroup()}
                    {note.notes !== "" && 
                        <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> {note.notes}</Typography>}
 
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