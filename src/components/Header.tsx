import { Link } from "react-router-dom";

import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

import { useHistory } from 'react-router';


import '../styles/header.scss'




export function Header() {
    const { user } = useContext(AuthContext);

    const history = useHistory();

    function goToExplore() {
        history.push('/inside/Explorer');
    }

    function Exit() {
        history.push('/');
    }


    return(
        <header>
                <div className="logo">
                    <h1>Work <p> It! </p></h1>
                </div>

                <div className="perfil">

                    <Link to="/inside/Chat"><img src={user?.avatar} alt="image" /></Link>

                    <div className="shortcut">
                        <button onClick={goToExplore} className="explore">
                            <i className="fab fa-wpexplorer"></i>
                        </button> 

                        <button onClick={Exit} className="exit">
                            <i className="fas fa-sign-out-alt"></i>
                        </button>   
                    </div>

                </div>
            </header>
    )
}