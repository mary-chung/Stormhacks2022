import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1 className="site-title"><Link to={'/'}>Mindnotes</Link></h1>
        </header>
    )
}

export default Header
