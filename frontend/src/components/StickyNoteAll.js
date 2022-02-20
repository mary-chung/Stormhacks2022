// For Demo Purposes

// import { Grid } from '@mui/material';
// import { Card, CardContent, CardActionArea } from '@mui/material';
// import { Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import StickyNoteHomeAdd from '../components/StickyNoteHomeAdd';

// function StickyNoteAll() {
//     return (
//         <Grid container spacing={3} className="home-page-grid">
//             <Grid item xs={3}>
//                 <Card>
//                     <CardActionArea component={Link} to={'/note'}>
//                         <CardContent>
//                             <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>Nervous for my project presentation on Tuesday</Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Write some speaker notes</Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Practice in front of a friend</Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Go for a quick walk before presenting</Typography>
//                             <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> Remember to go to the seminar room earlier to set up!</Typography>
//                         </CardContent>
//                     </CardActionArea>
//                 </Card>
//             </Grid>
//             <Grid item xs={3}>
//                 <Card>
//                     <CardActionArea component={Link} to={'/note'}>
//                         <CardContent>
//                             <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>Been having trouble falling asleep lately</Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Try the 4-7-8 breathing method</Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Set up a sleep timer with rain sounds</Typography>
//                             <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> First noticed this problem 12/02/22</Typography>
//                         </CardContent>
//                     </CardActionArea>
//                 </Card>
//             </Grid>
//             <Grid item xs={3}>
//                 <Card>
//                     <CardActionArea component={Link} to={'/note'}>
//                         <CardContent>
//                             <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>Excited to go to the museum on Wednesday!</Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Nothing, just looking forward to it :)	</Typography>
//                         </CardContent>
//                     </CardActionArea>
//                 </Card>
//             </Grid>
//             <Grid item xs={3}>
//                 <Card>
//                     <CardActionArea component={Link} to={'/note'}>
//                         <CardContent>
//                             <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>I keep getting a “storage full” notification on my phone </Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Backup the photos</Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Go through and delete some</Typography>
//                             <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> Do before visiting the museum!</Typography>
//                         </CardContent>
//                     </CardActionArea>
//                 </Card>
//             </Grid>
//             <Grid item xs={3}>
//                 <Card>
//                     <CardActionArea component={Link} to={'/note'}>
//                         <CardContent>
//                             <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>I couldn’t focus on studying for my exam</Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Trying using a pomodoro timer</Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Set up do not disturb on my phone</Typography>
//                             <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> To my future self: good luck! :)</Typography>
//                         </CardContent>
//                     </CardActionArea>
//                 </Card>
//             </Grid>
//             <Grid item xs={3}>
//                 <Card>
//                     <CardActionArea component={Link} to={'/note'}>
//                         <CardContent>
//                             <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>Reading the news made me feel depressed but I want to stay updated</Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Look for apps that provide quick summaries </Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Limit reading the news - maybe just during morning coffee breaks	</Typography>
//                             <Typography component="p" sx={{margin: '1rem auto'}}><span className="note-label">Notes:</span> Bob mentioned being subscribed to short daily newsletters - can ask him for details</Typography>
//                         </CardContent>
//                     </CardActionArea>
//                 </Card>
//             </Grid>
//             <Grid item xs={3}>
//                 <Card>
//                     <CardActionArea component={Link} to={'/note'}>
//                         <CardContent>
//                             <Typography variant="h5" component="h2" sx={{margin: '1rem auto 1rem'}}>I think I well in my interview, but I’m still anxious about the results</Typography>
//                             <Typography variant="p" component="h3" sx={{fontWeight: '400', marginTop: '0.5rem', lineHeight: '1.6'}}><span className="action-label">Action</span> Talk about it with Jane during lunch - she had felt like this before as well</Typography>
//                         </CardContent>
//                     </CardActionArea>
//                 </Card>
//             </Grid>

//             <StickyNoteHomeAdd />
//         </Grid>
//     )
// }

// export default StickyNoteAll