import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import app from '../service/firebase';
import { Input, Button, Grid, Text } from '@nextui-org/react';
import Modal from 'react-bootstrap/Modal';
import GoogleButton from 'react-google-button';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function ContentLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [smShow, setSmShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const [credential, setCredential] = useState({
    email: '',
    password: ''
  });

  async function handleLogin() {
    if (!credential.email) {
      setError('Email is required');
      return;
    }
    if (!credential.password) {
      setError('Password is required');
      return;
    }
    try {
      const login = await signInWithEmailAndPassword(auth, credential.email, credential.password);
      const token = login.user.accessToken;
      localStorage.setItem('token', token);
      setSuccess(true);
      setError('');
      setSmShow(true);
      setTimeout(() => {
        navigate('/home');
        window.location.reload();
      }, 1500);
    } catch (error) {
      setError('Wrong Password/Email');
      setSuccess(false);
      setSmShow(true);
    }
  }

  async function loginWithGoogle() {
    auth.languageCode = 'it';
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        localStorage.setItem('token', token);
        setSuccess(true);
        setError('');
        setSmShow(true);
        setTimeout(() => {
          navigate('/home');
          window.location.reload();
        }, 1500);
      })
      .catch(() => {
        setError('something wrong');
        setSuccess(false);
        setSmShow(true);
      });
  }

  function handleChangeInput(e, type) {
    let value = e.target.value;
    let temp = { ...credential };
    temp[type] = value;
    setCredential(temp);
  }

  return (
    <div className="latar">
      <div className="container">
        <div className="form-group">
          <>
            <Text
              h1
              size={60}
              css={{ textGradient: '45deg, $blue600 -20%, $pink600 50%' }}
              weight="bold">
              {' '}
              log in{' '}
            </Text>
            <Grid.Container gap={2}>
              <Grid>
                <Input
                  labelPlaceholder="Email"
                  width="250px"
                  value={credential.email}
                  onChange={(e) => handleChangeInput(e, 'email')}
                />
              </Grid>
              <Grid>
                <Input.Password
                  labelPlaceholder="Password"
                  width="250px"
                  value={credential.password}
                  onChange={(e) => handleChangeInput(e, 'password')}
                />
              </Grid>
              <Grid>
                <Button
                  onClick={() => {
                    setSmShow(true);
                    handleLogin();
                  }}
                  auto
                  color="success">
                  {' '}
                  Login{' '}
                </Button>
              </Grid>
              <div className="logoogle">
                <GoogleButton
                  onClick={() => {
                    setSmShow(true);
                    loginWithGoogle();
                  }}
                />
              </div>
            </Grid.Container>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!error && success && (
              <Modal
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">GAMESTATION</Modal.Title>
                </Modal.Header>
                <Modal.Body>login successfully</Modal.Body>
              </Modal>
            )}
            {error && (
              <Modal
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">ERROR</Modal.Title>
                </Modal.Header>
                <Modal.Body> {error} </Modal.Body>
              </Modal>
            )}
            <Text
              h1
              size={25}
              css={{ textGradient: '45deg, $blue600 -20%, $pink600 50%' }}
              weight="">
              {' '}
              Don't Have Account?{' '}
            </Text>
            <div className="lupa-akun">
              <Button onClick={() => navigate('/register')} auto color="primary">
                {' '}
                Register{' '}
              </Button>
              <Button onClick={() => navigate('/ForgotPassword')} auto color="warning">
                {' '}
                Lupa Password?{' '}
              </Button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
