import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AddButton() {
    return (
        <div className="add-button">
            <Link to={"/add"}>
                <Button variant="contained"
                        component="div" 
                        // sx={{
                        //     backgroundColor: '#746867',
                        //     '&:hover': {
                        //         backgroundColor: '#478caa',
                        //     },
                        // }}
                        primary
                        >
                    Add
                </Button>
            </Link>
        </div>
    )
}

export default AddButton
