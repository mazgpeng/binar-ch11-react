import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import Navsbar from "../navbar/Navsbar.jsx";
import Footer from "../components/Footer.js";
import app from '../service/firebase'
import { useNavigate } from "react-router";
const auth = getAuth(app)
const provider = new GoogleAuthProvider();


export const ContentLogin = () => {
    const navigate = useNavigate()
    const [credential, setCredential] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')
    async function handleLogin() {
        try {
            const login = await signInWithEmailAndPassword(auth, credential.email, credential.password)
            const token = login.user.accessToken
            localStorage.setItem('token', token)
            navigate('/home')
        } catch (error) {
            setError("Wrong Password/Email")
        }
    }

    async function loginWithGoogle() {
        auth.languageCode = 'it'
        signInWithPopup(auth, provider)
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken
                localStorage.setItem('token', token)
                navigate('/home')
            })
            .catch(err => {
                setError('something wrong')
            })
    }

    function handleChangeInput(e, type) {
        let value = e.target.value
        let temp = { ...credential }
        temp[type] = value
        setCredential(temp)
    }

    return (
    <div className="latar">
        <Navsbar />
            <div className="container">
                <div>
                    <input type="text" class="form-control" placeholder="email" value={credential.email} onChange={(e) => handleChangeInput(e, 'email')} />
                    <br />
                    <input type="text" class="form-control" placeholder="password" value={credential.password} onChange={(e) => handleChangeInput(e, 'password')} />
                    <br />
                    <button
                        className="btn btn-success"
                        onClick={handleLogin}
                    >Login</button>
                    <button
                        onClick={loginWithGoogle}
                    >Login With Google</button>
                    <p>{error}</p>
                </div>
            </div>
      <Footer />
    </div>
    )
};
