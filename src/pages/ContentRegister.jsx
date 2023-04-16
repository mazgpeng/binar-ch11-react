import { Input, Button } from "reactstrap";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import app from '../service/firebase'
const provider = new GoogleAuthProvider();

export const ContentRegister = () => {
    const [credential, setCredential] = useState({
        email: '',
        password: ''
    })

    async function handleSignUp() {
        try {
            const auth = getAuth(app)
            await createUserWithEmailAndPassword(auth, credential.email, credential.password)
        } catch (error) {
            console.log(error)
        }
    }

    function handleChangeInput(e, type) {
        let value = e.target.value
        let temp = { ...credential }
        temp[type] = value
        setCredential(temp)
    }

    return (
        <div>
            <input type="text" class="form-control" placeholder="email" value={credential.email} onChange={(e) => handleChangeInput(e, 'email')} />
            <br />
            <input type="text" class="form-control" placeholder="password" value={credential.password} onChange={(e) => handleChangeInput(e, 'password')} />
            <br />
            <button
                className="btn btn-success"
                onClick={handleSignUp}
            >Sign Up</button>
        </div>
    )
}
