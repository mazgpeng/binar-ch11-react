import { Text, Container, Row, Button, Spacer, Card, Col } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import suit from '../img/janken.png';
import { useNavigate } from 'react-router-dom';

const GameDetail = () => {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      setisLogin(true);
    }
  }, []);

  return (
    <>
      {isLogin ? (
        <div className="latar">
          <div className="container">
            <div className="detail-page">
              <h1 className="tulis-tengah text-light">Game Detail</h1>

              <div className="row">
                <div className="col-md-4">
                  <img src={suit} className="img-fluid d-block mx-auto rounded-5" />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <Text
                      h2
                      size={60}
                      css={{ textGradient: '45deg, $yellow600 -20%, $red600 100%' }}
                      weight="bold">
                      Rock Paper Scissors
                    </Text>
                    <p className="card-text text-light">
                      What is the concept of Rock Paper Scissors? Each gesture defeats one and is
                      defeated by one of the other two: rock defeats scissors but is defeated by
                      paper; paper defeats rock but is defeated by scissors. The person whose
                      gesture defeats the other is selected.
                    </p>
                    <div className="game-game-bottom">
                      <div className="leaderboard w-50 p-2">
                        <h5 className="card-text">Top 3 LeaderBoard</h5>
                        <table className="table table-hover table-primary">
                          <thead>
                            <tr>
                              <th scope="col">No</th>
                              <th scope="col">Username</th>
                              <th scope="col">Score</th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                      <Button
                        css={{ mb: '$10' }}
                        shadow
                        bordered
                        color="gradient"
                        auto
                        onClick={() => navigate('/game')}>
                        Play Now!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Container xs css={{ mt: '$40' }}>
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

export default GameDetail;
