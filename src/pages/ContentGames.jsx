import { Button, Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import suit from '../img/janken.png';
import coming1 from '../img/games.png';
import coming2 from '../img/games1.png';
import { useNavigate } from 'react-router-dom';

export default function ContentGameList() {
  const navigate = useNavigate();
  return (
    <div className="latar">
      <div className="container">
        <h1>
          Game List <Badge bg="info">BARU</Badge>{' '}
        </h1>
        <div className="formgmlist">
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={suit} />
            <Card.Body>
              <Card.Title>Rock Paper Scissors</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate('/games-detail')}>
                Game Detail
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={coming1} />
            <Card.Body>
              <Card.Title>-</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <Button variant="secondary">Segera Hadir</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={coming2} />
            <Card.Body>
              <Card.Title>-</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <Button variant="secondary">Segera Hadir</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
