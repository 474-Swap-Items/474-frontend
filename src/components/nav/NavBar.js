import {Link} from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { useAuthContext } from '../../contexts/AuthContext';
import {Auth} from 'aws-amplify'
import { useHistory } from 'react-router-dom';

export default function NavBar() {
    const { user, setUser } = useUserContext();
    const { auth, setAuth } = useAuthContext();
    let history = useHistory();

    const logout = async() => {
       try{
        Auth.signOut();
        setUser(null);
        setAuth(false);
        history.push("/");
       }catch (err) {
           console.log(err);
       }
    };

    return(
        <nav>
            <ul className="nav-bar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                { auth || user ? <button onClick={logout}>Logout</button> : null}
            </ul>
        </nav>
    )
}