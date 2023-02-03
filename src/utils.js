import { collection, getDocs } from "firebase/firestore"; 
import db from './firebaseconfig';

function signInUser(credential, navigate, setUser){
    const user = credential.user;
    setUser(user);
    // localStorage.setItem('auth', JSON.stringify(user))
    navigate('/');
}

async function fetchResults(database, callBack) {
    const querySnapshot = await getDocs(collection(db, database, 'history', id));
    let dbItems = []
    querySnapshot.forEach((doc) => {
        dbItems.push({id: doc.id, data: doc.data()})
    });
    callBack(dbItems.sort((a, b) => b.data.average - a.data.average))
}

export {signInUser, fetchResults}