import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import NavBar from '../nav/NavBar';

export default function Homepage() {
    return (
        <div>
            <NavBar/>
            <h1>Homepage!</h1>
        </div>
    );
}