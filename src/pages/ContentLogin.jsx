import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import {useNavigate} from "react-router";
import Footer from "../components/Footer.js";
import app from '../service/firebase'
import { Input, Button, Grid, Text  } from '@nextui-org/react';
import Modal from 'react-bootstrap/Modal';

const auth = getAuth(app)
const provider = new GoogleAuthProvider();



export const ContentLogin = () => {
    const navigate = useNavigate()
    const [smShow, setSmShow] = useState(false);

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
            navigate(0);

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
            <div className="container">
                <div className="form-group">
                    <>
                    <Text h1 size={60} css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}} weight="bold"> log in </Text>
                        <Grid.Container gap={2}>
                            <Grid>
                                <Input labelPlaceholder="Email" width="250px" type="text"  value={credential.email} onChange={(e) => handleChangeInput(e, 'email')}/>
                            </Grid>
                            <Grid>
                                <Input.Password labelPlaceholder="Password" width="250px"  value={credential.password} onChange={(e) => handleChangeInput(e, 'password')}/>
                            </Grid>
                            <Grid>
                                <Button onClick={() => { setSmShow(true); handleLogin(); }} auto color="success" > Login </Button>
                            </Grid>
                            <Grid>
                                <Button onClick={loginWithGoogle} color="secondary" auto> Login With Google </Button> 
                            </Grid>
                        </Grid.Container>
                        
                        <p>{error}</p>
                        <h3>Don't Have Account?</h3>
                        <Button onClick={() => navigate("/register")} auto color="success"> Register </Button>
                        <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm"
                            > <Modal.Header> <Modal.Title id="example-modal-sizes-title-sm">
                                GAMESTATION
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>login successfully</Modal.Body>
                        </Modal>
                        </>
                </div>
            </div>
        <Footer />
    </div>
    )
};
