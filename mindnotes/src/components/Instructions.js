import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { Card, CardActionArea, CardContent } from '@mui/material';

function Instructions() {
    return (
        <Grid item xs={3}>
            <Card>
                <CardActionArea component={Link} to={'/add'}>
                    <CardContent>
                        <section className="instructions">
                        <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>Organize your thoughts</Typography>
                            <Typography component="ol" sx={{margin: '1rem auto'}}>
                                <Typography component="li">Click on the add card to start taking a mind note</Typography>
                                <Typography component="li">Add your thoughts and what actions you can take</Typography>
                                <Typography component="li">Add your note to the mind board</Typography>
                                <Typography component="li">Reflect on your actions and rate if they were helpful</Typography>
                            </Typography>
                        </section>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default Instructions
