import { Text, Container, Card, Row, Spacer, Col, Button, Input } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { getAuth, updateProfile, onAuthStateChanged } from 'firebase/auth';
import app from '../service/firebase';
import { useNavigate } from 'react-router';

export const ContentProfileEdit = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      setisLogin(true);
    }
  }, []);

  const [users, setUsers] = useState();
  const [profile, setProfile] = useState({
    name: '',
    avatar: ''
  });

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      setUsers(data);
    });
  }, []);

  function updatedata() {
    updateProfile(auth.currentUser, {
      displayName: profile.name,
      photoURL: profile.avatar
    })
      .then(() => {
        alert('profile updated');
        navigate('/profile');
      })
      .catch(() => {
        alert('something wrong');
      });
  }

  function handleChangeInput(e, type) {
    let value = e.target.value;
    let temp = { ...profile };
    temp[type] = value;
    setProfile(temp);
  }

  return (
    <>
      {isLogin ? (
        <Container xl className="profile">
          <Card className="profile-edit" css={{ $$cardColor: 'gray' }}>
            <Card.Body>
              <Row align="center">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  UID :
                </Text>
                <Spacer y={2} />
                {users && (
                  <>
                    <Input disabled status="warning" value={users.uid} />
                  </>
                )}
              </Row>
              <Spacer y={0.3} />

              <Row align="center">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  Email :
                </Text>
                <Spacer y={2} />
                {users && (
                  <>
                    <Input readOnly status="warning" value={users.email} />
                  </>
                )}
              </Row>
              <Spacer y={0.3} />

              <Row align="center">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  Name :
                </Text>
                <Spacer y={2} />
                {users && (
                  <>
                    <Input
                      status="success"
                      placeholder="Update Name"
                      clearable
                      initialValue={users.displayName}
                      onChange={(e) => handleChangeInput(e, 'name')}
                    />
                  </>
                )}
              </Row>
              <Spacer y={0.3} />

              <Row align="center">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  Avatar :
                </Text>
                <Spacer y={2} />
                {users && (
                  <>
                    <Input
                      status="success"
                      placeholder="Input Image Url"
                      clearable
                      initialValue={users.photoURL}
                      onChange={(e) => handleChangeInput(e, 'avatar')}
                    />
                  </>
                )}
              </Row>
              <Spacer y={0.3} />

              <Row align="center">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  Game Score :
                </Text>
                <Spacer y={2} />
                <Input disabled status="error" />
              </Row>
            </Card.Body>
          </Card>
          <Row css={{ mt: '$10' }} justify="center" align="center">
            <Button onPress={updatedata} shadow color="primary">
              Submit
            </Button>
          </Row>
        </Container>
      ) : (
        <Container xs css={{ mt: '40px', height: '81vh' }}>
          <Row justify="center" align="center">
            <Col justify="center" align="center">
              <Card css={{ $$cardColor: 'white' }}>
                <Card.Body>
                  <Text justify="center" align="center" h1>
                    Please Login To View Page!
                  </Text>
                  <Spacer y={0.5} />
                  <Button
                    onClick={() => navigate('/login')}
                    xs
                    css={{ mb: '$10' }}
                    shadow
                    bordered
                    color="gradient"
                    auto>
                    Login
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
