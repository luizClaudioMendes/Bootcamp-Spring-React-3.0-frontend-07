import ButtonSearch from 'components/ButtonSearch';
import ProductCard from 'components/ProductCard';
import { Link } from 'react-router-dom';
import './styles.css';

const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="search-button-container">
        <div>
          <Link to="/">
            <ButtonSearch />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
