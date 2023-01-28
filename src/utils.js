
function signInUser(credential, navigate, setUser){
    const user = credential.user;
    setUser(user);
    localStorage.setItem('auth', JSON.stringify(user))
    navigate('/');
}

export {signInUser}