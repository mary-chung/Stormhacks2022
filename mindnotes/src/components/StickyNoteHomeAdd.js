import { Grid } from '@mui/material';
import { Card, CardContent, CardActionArea } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function StickyNoteHomeAdd() {
    return (
        <Grid item xs={3}>
            <Card>
                <CardActionArea component={Link} to={'/add'}>
                    <CardContent>
                       <AddIcon fontSize="large" sx={{margin: "1rem"}} />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default StickyNoteHomeAdd
