import { useState } from "react";
import Footer from "../components/Footer.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth"
import app from '../service/firebase'
import { Input, Button, Grid, Text  } from '@nextui-org/react';
import Modal from 'react-bootstrap/Modal';

export const ContentRegister = () => {
    const [smShow, setSmShow] = useState(false);


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
    <div className="latar">
         <div className="container">
            <div className="register">
            <>
                <Text h1 size={60} css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}} weight="bold"> Sign up</Text>
                <Grid.Container gap={2}>
                    <Grid>
                        <Input labelPlaceholder="Your Email" width="250px" type="text"  value={credential.email} onChange={(e) => handleChangeInput(e, 'email')}/>
                    </Grid>
                    <Grid>
                        <Input.Password labelPlaceholder="Password" width="250px"  value={credential.password} onChange={(e) => handleChangeInput(e, 'password')}/>
                        <Text color="warning" h7>Password should be 6-20 characters</Text>
                    </Grid>
                </Grid.Container>
                <Button onClick={() => { setSmShow(true); handleSignUp(); }} auto color="success"> Sign Up </Button>
                    <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm"
                        > <Modal.Header closeButton> <Modal.Title id="example-modal-sizes-title-sm">
                            Register
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Sign up successfully</Modal.Body>
                        </Modal>
                </>
                </div>
            </div>
        <Footer />
    </div>
    )
}
