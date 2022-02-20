import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AddButton() {
    return (
        <div className="add-button">
            <Link to={"/add"}>
                <Button variant="contained"
                        component="div" 
                        >
                    Add
                </Button>
            </Link>
        </div>
    )
}

export default AddButton
