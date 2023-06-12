import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app from '../service/firebase';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { Input, Button, Grid, Text } from '@nextui-org/react';
import Footer from '../components/Footer.js';
import '../pages/Home.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleChangeField = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Please check your email to reset the password');
        navigate('/login');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

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
              Reset Password{' '}
            </Text>
            <Grid.Container gap={2}>
              <form onSubmit={handleSubmit}>
                <Grid>
                  <Input
                    labelPlaceholder="email"
                    width="250px"
                    type="text"
                    value={email}
                    onChange={handleChangeField}
                  />
                </Grid>

                <Grid>
                  <Button type="submit" auto color="success">
                    {' '}
                    Kirim Email Reset Password{' '}
                  </Button>
                </Grid>
              </form>
            </Grid.Container>
            <h3>Belum punya akun?</h3>
            <div className="button-group">
              <Button onClick={() => navigate('/register')} auto color="success">
                {' '}
                Register{' '}
              </Button>
            </div>
          </>
        </div>
      </div>
      <Footer />
    </div>
  );
}
