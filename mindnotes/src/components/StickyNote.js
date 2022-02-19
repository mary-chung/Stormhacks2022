import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';

function StickyNote() {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">Worry Title</Typography>
                <Typography variant="h6" component="h3">Strategy 1</Typography>
                <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum fermentum dolor, et aliquam nibh eleifend ac.</Typography>
                <Typography variant="h6" component="h3">Strategy 2</Typography>
                <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum fermentum dolor, et aliquam nibh eleifend ac.</Typography>
            </CardContent>
        </Card>
    )
}

export default StickyNote
