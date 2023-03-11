import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <Link to="/products">
              <Button />
            </Link>
          </div>
          <div>
            <p>Comece agora a navegar</p>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
