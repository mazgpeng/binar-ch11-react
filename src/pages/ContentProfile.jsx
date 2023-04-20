import { Text, Container, Card, Row, Spacer,Col, Button } from "@nextui-org/react"
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import app from '../service/firebase'


export const ContentProfile = () => {
    const navigate = useNavigate()
    const auth = getAuth(app)
    const [isLogin, setisLogin] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            setisLogin(true)
        }
    }, [])

    const [users, setUsers] = useState()

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
          setUsers(data)
        });
      }, [])
    


    return (
        <>
            {isLogin ?
                <Container xl >
                    <Card css={{ $$cardColor: 'gray' }}>
                        <Card.Body>
                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    UID :
                                </Text>
                                <Spacer y={2} />
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                {users && <p>{users.uid}</p>}
                                </Text>
                            </Row>
                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Email :
                                </Text>
                                <Spacer y={2} />
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                {users && <p>{users.email}</p>}
                                </Text>
                            </Row>
                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Name :
                                </Text>
                                <Spacer y={2} />
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                {users && <p>{users.displayName}</p>}
                                </Text>
                            </Row>
                           
                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Avatar :
                                </Text>
                                <Spacer y={2} />
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                {users && <p>{users.photoURL}</p>}
                                </Text>
                            </Row>
                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Game Score :
                                </Text>
                                <Spacer y={2} />
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Game Score
                                </Text>
                            </Row>

                        </Card.Body>
                    </Card>
                    <Row css={{ mt: "$10" }} justify="center" align="center">
                        <Button onClick={() => navigate('/profile/edit')} shadow color="secondary">
                            Edit Profile
                        </Button>
                    </Row>
                </Container>
                :
                <Container xs css={{ mt: "$40" }} >
                    <Row justify="center" align="center">
                        <Col justify="center" align="center">
                            <Card css={{ $$cardColor: 'white' }}>
                                <Card.Body>
                                    <Text justify="center" align="center" h1>Please Login To View Page!</Text>
                                    <Spacer y={0.5} />
                                    <Button xs css={{ mb: "$10" }} shadow bordered color="gradient" auto>
                                        Login
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    );
}