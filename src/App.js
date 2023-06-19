import { Routes, Route } from 'react-router-dom';
import First from './pages/ContentLandingPage';
import { ContentHome } from './pages/ContentHome';
import ContentGameList from './pages/ContentGames';
import ContentLogin from './pages/ContentLogin';
import { ContentRegister } from './pages/ContentRegister';
import { ContentProfile } from './pages/ContentProfile';
import { ContentProfileEdit } from './pages/ContentProfileEdit';
import { ContentMedia } from './pages/ContentMedia';
import ForgotPassword from './pages/ForgotPassword';
import GameDetail from './pages/ContentGameDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navsbar from './navbar/Navsbar';
import { Janken } from './pages/janken';
import Footer from '../src/components/Footer';

function App() {
  return (
    <>
      <Navsbar />
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/home" element={<ContentHome />} />
        <Route path="/games" element={<ContentGameList />} />
        <Route path="/games-detail" element={<GameDetail />} />
        <Route path="/login" element={<ContentLogin />} />
        <Route path="/register" element={<ContentRegister />} />
        <Route path="/profile" element={<ContentProfile />} />
        <Route path="/profile/edit" element={<ContentProfileEdit />} />
        <Route path="/media" element={<ContentMedia />} />
        <Route path="/game" element={<Janken />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
