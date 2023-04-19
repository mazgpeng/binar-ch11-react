import { Text, Container, Card, Row, Spacer,Col, Button } from "@nextui-org/react"
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth"
import app from '../service/firebase'


export const ContentProfile = () => {
    const auth = getAuth(app)
    const [users, setUsers] = useState();
    const [isLogin, setisLogin] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            setisLogin(true)
        }
    }, [])


    useEffect(() => {
        let users = auth.currentUser;
        if (users) {
            setUsers(users)
        }
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
                                    UID
                                </Text>
                            </Row>
                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Email :
                                </Text>
                                <Spacer y={2} />
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Email
                                </Text>
                            </Row>
                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Name :
                                </Text>
                                <Spacer y={2} />
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Name
                                </Text>
                            </Row>
                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Country :
                                </Text>
                                <Spacer y={2} />
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Country
                                </Text>
                            </Row>
                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Date of Birth :
                                </Text>
                                <Spacer y={2} />
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Date of Birth
                                </Text>
                            </Row>
                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Avatar :
                                </Text>
                                <Spacer y={2} />
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Avatar
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
                            <Spacer y={2} />

                        </Card.Body>
                    </Card>
                    <Row css={{ mt: "$10" }} justify="center" align="center">
                        <Button shadow color="secondary">
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