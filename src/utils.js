import { collection, getDocs } from "firebase/firestore"; 
import db from './firebaseconfig';

function signInUser(credential, navigate, setUser){
    const user = credential.user;
    //Get the update the user state once sign in completed
    setUser(user);
    //Navigate to the dashboard
    navigate('/');
}

async function fetchResults(database, callBack, id) {
    const querySnapshot = await getDocs(collection(db, 'users'));
    let dbItems = []
    querySnapshot.forEach((doc) => {
        console.log(doc)
        dbItems.push({id: doc.id, data: doc.data()})
    });
    callBack(dbItems.sort((a, b) => b.data.average - a.data.average))
}

export {signInUser, fetchResults}