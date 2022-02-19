import { Link, useLocation } from 'react-router-dom';

function Header() {

    const location = useLocation();

    return (
        <header>
            <h1 className="site-title"><Link to={'/'} className={(location.pathname === '/note' || location.pathname === '/add' ) ? 'title-white' : undefined}>Mindnotes</Link></h1>
        </header>
    )
}

export default Header
