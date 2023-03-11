import ProductImg from 'assets/images/product.png';
import ButtonBuy from 'components/ButtonBuy';
import { Link } from 'react-router-dom';
import './styles.css';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
        <div>
          <Link to="/">
            <ButtonBuy />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
