import { Grid } from '@mui/material';
import { Card, CardContent, CardActionArea } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function StickyNoteSample() {
    return (
        <Grid item xs={3}>
            <Card>
                <CardActionArea component={Link} to={'/add'}>
                    <CardContent>
                        <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>
                            A thought for example
                        </Typography>
                        <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}>
                            <span className="action-label">Action</span> Something you could do to alleviate your thoughts
                        </Typography>
                        <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}>
                            <span className="action-label">Action</span> Another thing you could do
                            </Typography>
                        <Typography component="p" sx={{margin: '1rem auto'}}>
                            <span className="note-label">Notes:</span> Notes go here. Anything you want to jot down to help organize or go more in detail.
                            </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default StickyNoteSample
