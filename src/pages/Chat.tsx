import { useHistory } from 'react-router';

import '../styles/myPerfil.scss'

import { AuthContext } from '../contexts/AuthContext';
import { FormEvent, useContext, useState } from 'react';

import { Header } from '../components/Header';
import { firebase, database, auth } from '../services/firebase';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


type Cu ={
    messages: string;
}




export function Chat() {

    

    const [ formValue, setFormValue ] = useState('')

    const { user } = useContext(AuthContext);

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false)

    const ref = firebase.firestore().collection("usuarios");

    const query = ref.orderBy('id');


    function getMovies() {
        setLoading(true)

        query.onSnapshot((querySnapshot) => {
        const items: any = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
        });
        setMessages(items);
        setLoading(false);
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>;
    }

    const sendMessage = async(event: FormEvent) =>  {

        event.preventDefault();

        const uid = user?.id;
        const photoURL = user?.avatar;
        const username = user?.name;


        await ref.add({
            name: formValue,
            id: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
            username
        })

        setFormValue('');

    }


    

        

        
    


    
    return(
        <div id="my-perfil">

            <Header/>

            <div className="hr"></div>

            <main>

                <div className="main-left">

                </div>

                <div className="main-right">

                    <div className="content">
                    

                        {messages.map((message: any) => (
                            <div className="message-info">
                                <div className="message-content">
                                    <p>{message.name}</p>   
                                </div>
                                <div className="message-user-info">
                                    <img src={message.photoURL} alt={message.username} />   
                                    <span>{message.username}</span>
                                </div>
                            </div>
                        ))}
                   


                </div>
                    


                    <form className="formChat" onSubmit={sendMessage}>
                        <input type="text" value={formValue} onChange={ (e) => setFormValue(e.target.value)}/>
                        <input type="submit" />
                    </form>

                </div>   
                
            </main>
        </div>
    );
}