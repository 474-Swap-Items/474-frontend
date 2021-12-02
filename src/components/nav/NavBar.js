import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

export default function NavBar() {
    return(
        <nav>
            <ul className="nav-bar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
        </nav>
    )
}