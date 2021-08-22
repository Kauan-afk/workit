import '../styles/home.scss'

import GoogleIcon from '../images/google-icon.svg'

import imageHome from '../images/pinceis.png'

import { useHistory } from 'react-router';

import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';



export function Home() {
    const history = useHistory();

    const { signInWithGoogle, user } = useContext(AuthContext);

    async function authGoogle() {
        if(!user) {
            await signInWithGoogle();
        }

        history.push('/inside/Chat');
    }

    return(
        <div id='page-home'>
            <div className="main-left">

                <img src={imageHome} alt="Pincéis" />

                <h1>Work <p> It! </p></h1>
                <span>The perfect place to show your art to the world!</span>
            </div>
            <div className="main-right">
                <div className="login">
                    <h3>LogIn</h3>
                    <form className="form-login">
                        <input type="text" placeholder='Username'/>
                        <input type="password" placeholder='Password'/>
                        <input type="submit" value='LogIn'/>

                        <p>not registered yet?  Register</p>

                        <span className='separator'>or</span>
                        
                    </form>
                    <button className="buttonWithGoogle" onClick={ authGoogle }>
                        <img src={GoogleIcon} alt="google" />
                        LogIn with Google
                    </button>
                </div>
            </div>
        </div>
    );
}