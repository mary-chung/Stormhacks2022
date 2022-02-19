import { Link } from 'react-router-dom';
import mindnotesLogo from '../images/mindnotes-logo.png';

function Header() {

    return (
        <header>
                <Link to={'/'}>
                    <img className="mindnotes-logo" src={mindnotesLogo} alt="Mindnotes logo"/>
                    <h1 className="site-title">Mindnotes</h1>
                </Link>
        </header>
    )
}

export default Header
